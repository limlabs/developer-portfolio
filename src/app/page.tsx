import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { AboutCard } from './_components/aboutCard'
import { ProjectsList } from './_components/projectsList'
import { fetchProfile, fetchForm } from './_utils/api'
import { FormBlock } from './_components/FormBlock'

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
  const form = await fetchForm()
  return (
    <main className="flex flex-col items-center">
      <AboutCard variant="full" profile={profile} />
      <ProjectsList />
      <div className="py-16 px-12 w-full">
        <FormBlock form={form} />
      </div>
    </main>
  )
}
