'use client'
import { FC } from 'react'

import { Project } from '@/payload-types'
import { formatMonth } from '@/utilities/format'
import { ProjectRoles } from './projectRole'

interface ProjectDetailsHeadlineProps {
  project: Project
}

export const ProjectDetailsHeadline: FC<ProjectDetailsHeadlineProps> = ({
  project,
}: ProjectDetailsHeadlineProps) => {
  return (
    <div className="relative z-0 w-full text-foreground lg:pb-8 lg:pr-16">
      <h1 className="text-2xl font-bold leading-[30-px] lg:text-5xl">{project.title}</h1>
      {project.startDate && (
        <p className="pt-2 text-base leading-6">
          {formatMonth(project.startDate)}
          {project.endDate && ` - ${formatMonth(project.endDate)}`}
        </p>
      )}
      <ProjectRoles roles={project.role} />
    </div>
  )
}
