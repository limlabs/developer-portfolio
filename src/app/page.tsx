import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { AboutCard } from './_components/aboutCard'
import { ProjectsList } from './_components/projectsList'
import { fetchProfile } from './_utils/api'

export async function generateMetadata(
  _params: unknown,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const previousTitle = (await parent).title.absolute

  return {
    title: `Portfolio | ${previousTitle}`,
    description: 'A portfolio of work by a digital professional.',
  }
}

export default async function Home() {
  const profile = await fetchProfile()
  return (
    <main className="flex flex-col items-center">
      <AboutCard variant="full" profile={profile} />
      <ProjectsList />
    </main>
  )
}
