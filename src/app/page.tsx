import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { ContentBlock } from './_components/blocks/contentBlock'
import { MediaBlock } from './_components/blocks/mediaBlock'
import { fetchPage } from './_utils/api'

export async function generateMetadata(
  _params: unknown,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const previousTitle = (await parent)?.title?.absolute

  return {
    title: `Portfolio | ${previousTitle}`,
    description: 'A portfolio of work by a digital professional.',
  }
}

export default async function LandingPage() {
  const page = await fetchPage('profile-landing-page')

  return (
    <main className="w-full grid grid-cols-6 gap-4">
      {page.layout?.map(block => {
        switch (block.blockType) {
          case 'content':
            return <ContentBlock contentFields={block.contentFields} key={block.id} />
          case 'mediaBlock':
            return <MediaBlock mediaFields={block.mediaFields} />
        }
      })}
    </main>
  )
}
