import { useEffect, useState } from "react"

import { SeedStatus } from "@/components/setup/types"

import {
  seedForms,
  seedGlobals,
  seedMedia,
  seedPages,
  seedProjects,
  seedTechnologies,
} from "./actions"

const failureStatuses = ["error", "timeout"] as const

export const isFailureStatus = (status: string) => failureStatuses.includes(status as any)

interface SeedJob {
  name: string
  action: (job: SeedJob) => Promise<void>
  status: SeedStatus
  error?: unknown
}

export const useSeedProcess = () => {
  const [shouldProcess, setShouldProcess] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [jobs, setJobs] = useState<SeedJob[]>([
    {
      name: "Media",
      action: seedMedia,
      status: "waiting",
    },
    {
      name: "Globals",
      action: seedGlobals,
      status: "waiting",
    },
    {
      name: "Technologies",
      action: seedTechnologies,
      status: "waiting",
    },
    {
      name: "Forms",
      action: seedForms,
      status: "waiting",
    },
    {
      name: "Projects",
      action: seedProjects,
      status: "waiting",
    },
    {
      name: "Pages",
      action: seedPages,
      status: "waiting",
    },
  ])

  const processSeedJob = async (job: SeedJob) => {
    if (job.status !== "waiting") {
      return job
    }

    const timeout = new Promise(resolve => setTimeout(resolve, 30000))
    setJobs(jobs => jobs.map(j => (j.name === job.name ? { ...j, status: "seeding" } : j)))

    try {
      const result = job.action(job).then(() => true)
      const raceResult = await Promise.race([result, timeout])

      if (!raceResult) {
        job.status = "timeout"
      } else {
        job.status = "ready"
      }
    } catch (error) {
      job.status = "error"
    }

    setJobs(jobs => jobs.map(j => (j.name === job.name ? job : j)))
    return job
  }

  const retry = () => {
    setJobs(jobs =>
      jobs.map(j => ({ ...j, status: isFailureStatus(j.status) ? "waiting" : j.status })),
    )
    setShouldProcess(true)
  }

  useEffect(() => {
    async function processJobs() {
      for (const job of jobs) {
        const { status } = await processSeedJob(job)
        if (status === "error" || status === "timeout") {
          break
        }
      }
    }

    if (shouldProcess && !processing) {
      setShouldProcess(false)
      setProcessing(true)
      processJobs().finally(() => {
        setProcessing(false)
      })
    }
  }, [processing, shouldProcess, jobs])

  return {
    jobs,
    retry,
  }
}
