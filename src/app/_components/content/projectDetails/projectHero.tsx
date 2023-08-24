'use client'
import { FC } from 'react'

import { Project, Technology } from '../../../../payload-types'
import { MediaBlock } from '../../../_components/content/mediaBlock'

interface ProjectHeroProps {
  project: Project
}

export const ProjectHero: FC<ProjectHeroProps> = ({ project }) => {
  return (
    <div className="relative z-10 lg:pl-20 mt-6 lg:mt-0 flex flex-col items-start lg:items-center justify-center col-span-6 lg:col-span-3 lg:flex-shrink-0">
      {project.technologiesUsed && (
        <>
          <div className="flex justify-start w-full text-lg lg:text-xl">
            <h4>Technologies Used</h4>
          </div>
          <ul className="flex gap-3 w-full text-xl flex-wrap mt-2 mb-4">
            {project.technologiesUsed.map(technology => (
              <li
                className="border border-foreground px-5 py-2 rounded-md "
                key={(technology as Technology).id}
              >
                {(technology as Technology).name}
              </li>
            ))}
          </ul>
        </>
      )}
      <MediaBlock
        className="lg:mb-20 w-full"
        containerClassName="h-[70vw] lg:h-[348px] lg:mb-20"
        mediaFields={[{ media: project.featuredImage, size: 'full' }]}
        priority
      />
    </div>
  )
}
