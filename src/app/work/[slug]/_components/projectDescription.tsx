import { FC } from 'react'

import { Project } from '../../../../payload-types'
import { MediaCard } from '../../../_components/mediaCard'
import { RichText } from '../../../_components/richText'

interface ProjectDescriptionProps {
  project: Project
}

export const ProjectDescription: FC<ProjectDescriptionProps> = ({ project }) => {
  return (
    <section className="lg:grid grid-cols-2fr/1fr md:flex justify-center items-center w-full ">
      <div className=" text-muted-foreground  pt-4 lg:pt-0 lg:px-16  px-6 text-sm w-full">
        <div className="flex justify-evenly text-sm p-6 lg:pl-0 w-full float-right">
          <MediaCard
            src="/outside-app-2.png"
            caption="Marketing Image for Pre-Launch"
            alt="Marketing Image for Pre-Launch"
            height={420}
            width={800}
          />
        </div>
        <RichText content={project.description} />
      </div>
    </section>
  )
}
