'use client'
import { FC } from 'react'

import { Project } from '../../../../payload-types'
import { formatMonth } from '../../../_utils/date'
import { ProjectRoles } from './projectRole'

interface ProjectSummaryProps {
  project: Project
}

export const ProjectSummary: FC<ProjectSummaryProps> = ({ project }: ProjectSummaryProps) => {
  return (
    <div className=" relative  z-0 text-foreground  pt-8 lg:pt-0 lg:pb-8 lg:pr-16  w-full">
      <h1 className="font-extrabold leading-[30-px] text-5xl">{project.title}</h1>

      {project.startDate && (
        <p className="leading-7 text-base pt-2">
          {formatMonth(project.startDate)}
          {project.endDate && ` - ${formatMonth(project.endDate)}`}
        </p>
      )}
      <ProjectRoles roles={project.role} />
    </div>
  )
}
