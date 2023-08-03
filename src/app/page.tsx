import React, { Fragment } from 'react'
import { notFound } from 'next/navigation'

import { Page } from './../payload-types'
import { Footer } from './_components/footer'
import { Gutter } from './_components/Gutter'
import { Hero } from './_components/Hero'
import { NavBar } from './_components/navBar'
import { ProjectSection } from './_components/projectSection'

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
    <Fragment>
      <main>
        <Gutter>
          <div className="flex flex-col items-center bg-background">
            <NavBar />
            <Hero />
            <ProjectSection />
            <Footer />
          </div>
        </Gutter>
      </main>
    </Fragment>
  )
}
