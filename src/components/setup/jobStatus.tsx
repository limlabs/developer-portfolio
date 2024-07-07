import { CircleDashed, Circle, CheckCircle, AlertCircle } from 'lucide-react'
import { SeedStatus } from './types'

export const JobStatus = ({ status }: { status: SeedStatus }) => {
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
          <span className="w-3/4 text-right">Importing</span>
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
