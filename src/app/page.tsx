import React, { Suspense } from 'react'

import { AboutCard } from './_components/aboutCard'
import { FadeInContent } from './_components/fadeInContent'
import { ProjectsList } from './_components/projectsList'

export default async function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Suspense>
        <AboutCard variant="full" />
      </Suspense>
      <ProjectsList />
    </main>
  )
}
