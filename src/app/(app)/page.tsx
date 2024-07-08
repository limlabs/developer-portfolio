import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'

import { Media } from '@/payload-types'
import { ContentLayout } from '@/components/content/contentLayout'
import { fetchPage, fetchProfile } from '@/utilities/api'
import { parsePreviewOptions } from '@/utilities/preview'
import { SetupTitle } from '@/components/setup/setupTitle'
import { SetupMessage } from '@/components/setup/setupMessage'
import { Button } from '@/components/ui/button'
import { PlusCircle, Computer } from 'lucide-react'
import { Block } from '@/components/ui/block'

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
  if ((page?.meta?.image as Media)?.url) {
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

  if (!page) {
    return (
      <div className="mt-12 flex flex-col items-center justify-center gap-8 rounded-sm border-4 border-dashed border-accent py-40">
        <SetupTitle>So wow, much empty.</SetupTitle>
        <SetupMessage>
          <span>Create a page with slug</span>
          <code className="mx-1 bg-box/40 px-1 py-0.5 font-mono">/home</code>
          <span>, or run the setup process to get started.</span>
        </SetupMessage>
        <Block fadeIn className="flex w-96 justify-between delay-1000 lg:justify-between">
          <Button href="/admin/collections/pages/create" variant="outline" size="lg">
            Create Page
            <PlusCircle size={16} className="ml-2" />
          </Button>
          <Button href="/setup" variant="outline" size="lg">
            Run Setup
            <Computer size={16} className="ml-2" />
          </Button>
        </Block>
      </div>
    )
  }

  return <ContentLayout profile={profile} layout={page?.layout} />
}
