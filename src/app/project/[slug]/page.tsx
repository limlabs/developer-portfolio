import { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation'

import { Media } from '../../../payload-types'
import { ContentLayout } from '../../_components/content/contentLayout'
import { ProfileCTABlock } from '../../_components/content/profileCTABlock'
import { RichText } from '../../_components/content/richText'
import { FadeInContent } from '../../_components/ui/fadeInContent'
import { fetchProfile, fetchProject } from '../../_utils/api'
import { BackButton } from './_components/backButton'
import { ProjectHero } from './_components/projectHero'
import { ProjectImageSection } from './_components/projectImageSection'
import { ProjectSummary } from './_components/projectSummary'

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
    <main className="w-full max-w-[1080px] px-8 lg:px-0 flex flex-col gap-12 mt-12 ">
      <section className="lg:mt-12 flex flex-col lg:block">
        <FadeInContent className="relative z-10 delay-100 order-2 lg:order-none lg:float-right mb-16 lg:mb-0">
          <ProjectHero project={project} />
        </FadeInContent>
        <FadeInContent className="order-1 lg:order-none">
          <ProjectSummary project={project} />
        </FadeInContent>
        <FadeInContent className="relative z-0 delay-200 order-3 lg:order-none">
          <RichText content={project.description} />
        </FadeInContent>
      </section>
      <section className="w-full mb-8">
        <ContentLayout profile={profile} layout={project.layout} />
      </section>
      <BackButton />
    </main>
  )
}
