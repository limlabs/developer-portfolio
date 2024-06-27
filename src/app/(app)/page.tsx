import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { Media } from '@/payload-types'
import { ContentLayout } from '@/components/content/contentLayout'
import { fetchPage, fetchProfile } from '@/utilities/api'
import { parsePreviewOptions } from '@/utilities/preview'

interface LandingPageProps {
  searchParams: Record<string, string>
}

export async function generateMetadata(
  { searchParams }: LandingPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const defaultTitle = (await parent)?.title?.absolute
  const options = parsePreviewOptions(searchParams)
  const page = await fetchPage('home', options)

  const title = page?.meta?.title || defaultTitle
  const description = page?.meta?.description || 'A portfolio of work by a digital professional.'
  const images = []
  if ((page?.meta?.image as Media).url) {
    images.push((page?.meta?.image as Media).url as string)
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      images,
    },
  }
}

export default async function LandingPage({ searchParams }: LandingPageProps) {
  const options = parsePreviewOptions(searchParams)
  const [page, profile] = await Promise.all([fetchPage('home', options), fetchProfile()])

  return <ContentLayout profile={profile} layout={page?.layout} />
}
