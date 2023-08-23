import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { ContentLayout } from './_components/content/contentLayout'
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
  const [page, profile] = await Promise.all([fetchPage('profile-landing-page'), fetchProfile()])

  return (
    <main>
      <ContentLayout profile={profile} layout={page.layout} />
    </main>
  )
}
