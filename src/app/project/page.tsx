import { NavBar } from '../_components/navBar'
import { Header } from './Header'
import { DesignSummary } from './designSummary'
import { ProjectImageSection } from './projectImageSection'
import { ProjectSummary } from './projectSummary'

export default function ProjectPage() {
  return (
    <main className="items-center justify-center flex flex-col px-8 lg:px-24 w-full max-w-[1440px] ">
      <Header />
      <ProjectSummary />
      <DesignSummary />
      <ProjectImageSection />
    </main>
  )
}
