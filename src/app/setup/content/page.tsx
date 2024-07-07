'use client'

import { Button } from '@payloadcms/ui'
import { useSeedProcess } from './hooks'
import Link from 'next/link'

export default function FromExamplePage() {
  const { jobs, retry } = useSeedProcess()

  return (
    <div>
      <h1>Seeding Data</h1>
      <ul>
        {jobs.map(job => (
          <li key={job.name}>
            {job.name} - {job.status}
          </li>
        ))}
      </ul>
      {jobs.every(job => job.status === 'ready') && (
        <Button>
          <Link href="/setup/finish">Finish Setup</Link>
        </Button>
      )}
      {jobs.some(job => job.status === 'error') && <Button onClick={retry}>Retry</Button>}
    </div>
  )
}
