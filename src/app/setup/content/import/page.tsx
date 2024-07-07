'use client'

import { Button } from '@/components/ui/button'
import { isFailureStatus, SeedStatus, useSeedProcess } from './hooks'
import { AlertCircle, ArrowRight, CheckCircle, Circle, CircleDashed } from 'lucide-react'
import { SetupTitle } from '@/components/setup/setupTitle'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useFade } from '@/hooks/useFade'
import { useRef } from 'react'
import { cn } from '@/utilities'

export const JobStatusIcon = ({ status }: { status: SeedStatus }) => {
  switch (status) {
    case 'waiting':
      return (
        <span className="flex w-full items-center justify-between text-muted-foreground">
          <CircleDashed size={16} />
          <span className="w-3/4 text-right">Waiting</span>
        </span>
      )
    case 'seeding':
      return (
        <span className="flex w-full items-center justify-between text-muted-foreground">
          <Circle size={16} className="animate-pulse fill-primary repeat-infinite" />
          <span className="w-3/4 text-right">Seeding</span>
        </span>
      )
    case 'ready':
      return (
        <span className="flex w-full items-center justify-between text-green-600">
          <CheckCircle size={16} />
          <span className="w-3/4 text-right">Ready</span>
        </span>
      )
    case 'error':
      return (
        <span className="flex w-full items-center justify-between text-destructive">
          <AlertCircle size={16} />
          <span className="w-3/4 text-right">Error</span>
        </span>
      )
    case 'timeout':
      return (
        <span className="flex w-full items-center justify-between text-destructive">
          <AlertCircle size={16} />
          <span className="w-3/4 text-right">Timeout</span>
        </span>
      )
  }
}

export default function ImportContentPage() {
  const { jobs, retry } = useSeedProcess()
  const tableRef = useRef(null)
  const fade = useFade(tableRef, { translate: false })

  return (
    <div className="flex h-[510px] w-full max-w-screen-sm flex-col gap-8">
      <SetupTitle>Importing Content</SetupTitle>
      <Table
        ref={tableRef}
        className={cn('delay-500', fade.onScreen ? fade.classes.fade : fade.classes.init)}
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
                <JobStatusIcon status={job.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {jobs.every(job => job.status === 'ready') && (
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
