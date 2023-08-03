import React from 'react'
import { notFound } from 'next/navigation'

import { Page } from './../payload-types'
import { AboutCard } from './_components/aboutCard'
import { ProjectsList } from './_components/projectsList'

export default async function Home() {
  const home: Page = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=home`,
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  if (!home) {
    return notFound()
  }

  return (
    <main className="flex flex-col items-center ">
      <AboutCard />
      <ProjectsList />
    </main>
  )
}
