"use client"

import { useRef } from "react"

import { ArrowRight } from "lucide-react"

import { isFailureStatus, useSeedProcess } from "@/app/setup/content/import/hooks"
import { useFade } from "@/hooks/useFade"
import { cn } from "@/utilities"

import { Button } from "../ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { JobStatus } from "./jobStatus"
import { SetupTitle } from "./setupTitle"

export function ContentImport() {
  const { jobs, retry } = useSeedProcess()
  const tableRef = useRef(null)
  const fade = useFade(tableRef, { translate: false })

  return (
    <div className="flex h-[510px] w-full max-w-screen-sm flex-col gap-8">
      <SetupTitle>Importing Content</SetupTitle>
      <Table
        ref={tableRef}
        className={cn("delay-500", fade.onScreen ? fade.classes.fade : fade.classes.init)}
      >
        <TableHeader>
          <TableRow>
            <TableHead>Content Type</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.name}</TableCell>
              <TableCell width={110}>
                <JobStatus status={job.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {jobs.every(job => job.status === "ready") && (
        <Button href="/setup/finish">
          Finish Setup
          <span className="ml-2">
            <ArrowRight size={16} />
          </span>
        </Button>
      )}
      {jobs.some(job => isFailureStatus(job.status)) && <Button onClick={retry}>Retry</Button>}
    </div>
  )
}
