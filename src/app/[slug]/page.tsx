import { redirect } from 'next/navigation'

import { ContentLayout } from '../_components/content/contentLayout'
import { fetchPage } from '../_utils/api'
import { parsePreviewOptions } from '../_utils/preview'

interface LandingPageProps {
  params: {
    slug: string
  }
  searchParams: Record<string, string>
}

const LandingPage = async ({ params, searchParams }: LandingPageProps) => {
  const { slug } = params
  const options = parsePreviewOptions(searchParams)
  const page = await fetchPage(slug, options)

  if (!page?.layout) {
    redirect('/not-found')
  }

  return <ContentLayout layout={page.layout} className="mt-16" />
}

export default LandingPage
