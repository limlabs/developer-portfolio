import { Metadata, ResolvingMetadata } from 'next'
import { redirect } from 'next/navigation'

import { Media } from '../../../payload-types'
import { AboutCard } from '../../_components/aboutCard'
import { FadeInContent } from '../../_components/fadeInContent'
import { RichText } from '../../_components/richText'
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
  const [profile, project] = await Promise.all([fetchProfile(), fetchProject(params.slug)])

  if (!project) {
    redirect('/404')
  }

  return (
    <main className="w-full max-w-[1080px] px-8 md:px-8 flex flex-col gap-12 mt-12 ">
      <AboutCard variant="compact" profile={profile} />
      <section className="md:mt-12 flex flex-col md:block">
        <FadeInContent className="relative z-10 delay-100 order-2 md:order-none md:float-right mb-16 md:mb-0">
          <ProjectHero project={project} />
        </FadeInContent>
        <FadeInContent className="order-1 md:order-none">
          <ProjectSummary project={project} />
        </FadeInContent>
        <FadeInContent className="relative z-0 delay-200 order-3 md:order-none">
          <RichText content={project.description} />
        </FadeInContent>
      </section>
      <ProjectImageSection project={project} />
      <BackButton />
    </main>
  )
}
