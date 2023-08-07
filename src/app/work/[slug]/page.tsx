import { redirect } from 'next/navigation'

import { AboutCard } from '../../_components/aboutCard'
import { FadeInContent } from '../../_components/fadeInContent'
import { RichText } from '../../_components/richText'
import { fetchProject } from '../../_utils/api'
import { BackButton } from './_components/backButton'
import { ProjectHero } from './_components/projectHero'
import { ProjectImageSection } from './_components/projectImageSection'
import { ProjectSummary } from './_components/projectSummary'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await fetchProject(params.slug)

  if (!project) {
    redirect('/404')
  }

  return (
    <main className="w-full max-w-[1080px] px-8 md:px-0 flex flex-col gap-12 mt-12 md:mt-44">
      <AboutCard variant="compact" />
      <section className="md:mt-20 flex flex-col md:block">
        <FadeInContent className="delay-100 order-2 md:order-none md:float-right mb-16 md:mb-0">
          <ProjectHero project={project} />
        </FadeInContent>
        <FadeInContent className="order-1 md:order-none">
          <ProjectSummary project={project} />
        </FadeInContent>
        <FadeInContent className="delay-200 order-3 md:order-none">
          <RichText content={project.description} />
        </FadeInContent>
      </section>
      <ProjectImageSection />
      <BackButton />
    </main>
  )
}
