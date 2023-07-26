import React, { Fragment } from 'react'
import { notFound } from 'next/navigation'

import { Page } from './../payload-types'
import { Gutter } from './_components/Gutter'
import { RichText } from './_components/RichText'
import { Button } from './_components/ui/button'

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
          <div>
            <Button variant="destructive">Click me</Button>
            <RichText content={home.richText} />
          </div>
        </Gutter>
      </main>
    </Fragment>
  )
}
