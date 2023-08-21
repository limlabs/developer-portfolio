import React, { Suspense } from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { Form, Project } from '../payload-types'
import { ContentBlock } from './_components/content/contentBlock'
import { FormBlock } from './_components/content/formBlock'
import { MediaBlock } from './_components/content/mediaBlock'
import { ProfileCTABlock } from './_components/content/profileCTABlock'
import { ProjectGridBlock } from './_components/content/projectGridBlock'
import { fetchPage, fetchProfile } from './_utils/api'

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
  const profile = await fetchProfile()

  return (
    <main className="w-full grid grid-cols-6 gap-4">
      {page.layout?.map(block => {
        switch (block.blockType) {
          case 'content':
            return <ContentBlock contentFields={block.contentFields} key={block.id} />
          case 'mediaBlock':
            return <MediaBlock mediaFields={block.mediaFields} key={block.id} />
          case 'profile-cta':
            return <ProfileCTABlock profile={profile} key={block.id} />
          case 'projectGrid':
            return <ProjectGridBlock projects={block.project as Project[]} key={block.id} />
          case 'form':
            return <FormBlock intro={block.richText} form={block.form as Form} key={block.id} />
        }
      })}
    </main>
  )
}
