import { FC } from 'react'

import { Project } from '../../../../payload-types'
import { formatMonth } from '../../../_utils/date'

interface ProjectSummaryProps {
  project: Project
}

export const ProjectSummary: FC<ProjectSummaryProps> = async ({ project }: ProjectSummaryProps) => {
  return (
    <div className="text-foreground  pt-8 lg:pt-0 lg:pb-8 lg:pr-16  w-full">
      <h1 className="font-extrabold leading-[30-px] text-5xl">{project.title}</h1>
      {project.startDate && (
        <p className="leading-7 text-base pt-2">
          {formatMonth(project.startDate)}
          {project.endDate && ` - ${formatMonth(project.endDate)}`}
        </p>
      )}
      <h4 className="font-semibold leading-tight text-xl lg:text-2xl pt-3">{project.role}</h4>
    </div>
  )
}
