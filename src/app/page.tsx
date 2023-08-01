import React, { Fragment } from 'react'
import { notFound } from 'next/navigation'

import { Page } from './../payload-types'
import { Gutter } from './_components/Gutter'
import { RichText } from './_components/RichText'
import { Button } from './_components/ui/button'
import { NavBar } from './_components/navBar'
import { Hero } from './_components/Hero'
import { ProjectSection } from './_components/projectSection'
import { Footer } from './_components/footer'

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
      <main className="bg-stone-800">
        <Gutter>
          <div>
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
