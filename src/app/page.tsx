import React from 'react'

import { AboutCard } from './_components/aboutCard'
import { ProjectsList } from './_components/projectsList'

export default async function Home() {
  return (
    <main className="flex flex-col items-center ">
      <AboutCard variant="full" />
      <ProjectsList />
    </main>
  )
}
