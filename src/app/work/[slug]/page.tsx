import { redirect } from 'next/navigation'

import { AboutCard } from '../../_components/aboutCard'
import { fetchProject } from '../../_utils/api'
import { BackButton } from './_components/backButton'
import { ProjectDescription } from './_components/projectDescription'
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
      <ProjectSummary project={project} />
      <ProjectDescription project={project} />
      <ProjectImageSection />
      <BackButton />
    </main>
  )
}
