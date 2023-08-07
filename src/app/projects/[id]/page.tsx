import { AboutCard } from '../../_components/aboutCard'
import { BackButton } from './_components/backButton'
import { DesignSummary } from './_components/designSummary'
import { ProjectImageSection } from './_components/projectImageSection'
import { ProjectSummary } from './_components/projectSummary'

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <main className="w-full max-w-[1080px] px-8 md:px-0 flex flex-col gap-12 mt-12 md:mt-44">
      <AboutCard variant="compact" />
      <ProjectSummary />
      <DesignSummary />
      <ProjectImageSection />
      <BackButton />
    </main>
  )
}
