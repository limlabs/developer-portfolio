import { FC } from 'react'

import { Project } from '../../../../payload-types'
import { MediaCard } from '../../../_components/mediaCard'
import { formatMonth } from '../../../_utils/date'

interface ProjectSummaryProps {
  project: Project
}

export const ProjectSummary: FC<ProjectSummaryProps> = async ({ project }: ProjectSummaryProps) => {
  return (
    <section className="lg:flex md:flex justify-center items-center  w-full">
      <div className=" text-foreground  pt-8 lg:pt-0 lg:pr-16 px-6 lg:px-0  w-full">
        <h1 className="font-extrabold leading-[30-px] text-5xl">{project.title}</h1>
        {project.startDate && (
          <p className="leading-7 text-base">
            {formatMonth(project.startDate)}
            {project.endDate && ` - ${formatMonth(project.endDate)}`}
          </p>
        )}
        <h4 className="font-semibold leading-tight text-base">{project.role}</h4>
        <MediaCard
          src="/project-2.png"
          caption="Outside App, 2023"
          alt="project 2 title"
          height={400}
          width={500}
        />
      </div>
      <div className="text-foreground p-6 lg:p-0 w-full flex flex-col items-start lg:items-center justify-center">
        {project.technologiesUsed && (
          <>
            <div className="flex justify-start w-full lg:px-12  text-xl py-2  ">
              <h4 className="">Technologies Used</h4>
            </div>
            <ul className="flex justify-between w-full text-xl lg:px-12 flex-wrap ">
              {project.technologiesUsed.map(({ technology }) => (
                <li className="border border-foreground p-2 rounded-md m-2 ">{technology}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
