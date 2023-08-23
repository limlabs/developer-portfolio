import { redirect } from 'next/navigation'

import { ContentLayout } from '../_components/content/contentLayout'
import { fetchPage } from '../_utils/api'

interface LandingPageProps {
  params: {
    slug: string
  }
}

const LandingPage = async ({ params }: LandingPageProps) => {
  const { slug } = params
  const page = await fetchPage(slug)

  if (!page?.layout) {
    redirect('/not-found')
  }

  return <ContentLayout layout={page.layout} />
}

export default LandingPage
