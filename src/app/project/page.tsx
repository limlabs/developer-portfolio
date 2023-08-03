import { NavBar } from '../_components/navBar'
import { DesignSummary } from './designSummary'
import { ProjectImageSection } from './projectImageSection'
import { ProjectSummary } from './projectSummary'

export default function ProjectPage() {
  return (
    <main className="items-center justify-center flex flex-col lg:px-24 max-w-[1440px] ">
      <ProjectSummary />
      <DesignSummary />
      {/* <ProjectImageSection /> */}
    </main>
  )
}
