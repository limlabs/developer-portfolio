import { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation'

import { Media } from '../../../payload-types'
import { ProjectDetails } from '../../_components/content/projectDetails/projectDetails'
import { fetchProfile, fetchProject } from '../../_utils/api'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const project = await fetchProject(params.slug)
  const previousTitle = (await parent)?.title.absolute

  const images: string[] = []
  if (project?.featuredImage) {
    images.push((project.featuredImage as Media).url)
  }

  return {
    title: `${project.title} | ${previousTitle}`,
    description: 'Details on a portfolio project.',
    openGraph: {
      images,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const [project, profile] = await Promise.all([fetchProject(params.slug), fetchProfile()])

  if (!project) {
    redirect('/404')
  }

  return (
    <main>
      <ProjectDetails project={project} profile={profile} />
    </main>
  )
}
