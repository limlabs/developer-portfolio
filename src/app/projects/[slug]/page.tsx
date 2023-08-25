import { Metadata, ResolvingMetadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { Media } from '../../../payload-types'
import { ProjectDetails } from '../../_components/content/projectDetails/projectDetails'
import { fetchProfile, fetchProject } from '../../_utils/api'

interface ProjectPageProps {
  params: {
    slug: string
  }
  searchParams: Record<string, string>
}

const parseRequest = (searchParams: Record<string, string | undefined>) => {
  const draft = searchParams.preview === 'true'
  const draftSecret = searchParams.secret
  const payloadToken = cookies().get('payload-token').value

  return { draft, draftSecret, payloadToken }
}

export async function generateMetadata(
  { params, searchParams }: ProjectPageProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const [project, previousTitle] = await Promise.all([
    fetchProject(params.slug, parseRequest(searchParams)),
    (await parent)?.title.absolute,
  ])

  const images: string[] = []
  if (project?.featuredImage) {
    images.push((project.featuredImage as Media).url)
  }

  return {
    title: `${project?.title} | ${previousTitle}`,
    description: 'Details on a portfolio project.',
    openGraph: {
      images,
    },
  }
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const [project, profile] = await Promise.all([
    fetchProject(params.slug, parseRequest(searchParams)),
    fetchProfile(),
  ])

  if (!project) {
    redirect('/not-found')
  }

  return (
    <main>
      <ProjectDetails project={project} profile={profile} />
    </main>
  )
}
