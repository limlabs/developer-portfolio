import { NavBar } from '../_components/navBar'
import { DesignSummary } from './designSummary'
import { ProjectImageSection } from './projectImageSection'
import { ProjectSummary } from './projectSummary'

export default function ProjectPage() {
  return (
    <main className="bg-stone-800 flex flex-col">
      <NavBar />
      <ProjectSummary />
      {/* <DesignSummary />
      <ProjectImageSection /> */}
    </main>
  )
}
