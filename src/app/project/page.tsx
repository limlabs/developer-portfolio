import Link from 'next/link'
import { Button } from '../_components/ui/button'
import { Header } from './Header'
import { DesignSummary } from './designSummary'
import { ProjectImageSection } from './projectImageSection'
import { ProjectSummary } from './projectSummary'
import { BackButton } from './backButton'

export default function ProjectPage() {
  return (
    <main className="flex flex-col lg:px-24 md:px-8 w-screen max-w-[1440px] overflow-x-hidden gap-12">
      <Header />
      <ProjectSummary />
      <DesignSummary />
      <ProjectImageSection />
      <BackButton />
    </main>
  )
}
