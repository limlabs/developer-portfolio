'use client'
import { FC } from 'react'

import { Project, Technology } from '../../../../payload-types'
import { MediaBlock } from '../../../_components/content/mediaBlock'

interface ProjectHeroProps {
  project: Project
}

export const ProjectHero: FC<ProjectHeroProps> = ({ project }) => {
  return (
    <div className="relative z-10 lg:pl-20 mt-6 lg:mt-0 flex flex-col items-start lg:items-center justify-center col-span-6 lg:col-span-3 lg:flex-shrink-0 ">
      {project.technologiesUsed && (
        <div>
          <div className="flex justify-start w-full text-lg lg:text-xl">
            <h4>Technologies Used</h4>
          </div>
          <ul className="flex gap-3 text-xl flex-wrap mt-2 mb-4 lg:mb-6 w-full max-w-[532px]">
            {project.technologiesUsed.map(technology => (
              <li
                className="border border-foreground px-5 py-2 rounded-md "
                key={(technology as Technology).id}
              >
                {(technology as Technology).name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <MediaBlock
        className="w-full lg:max-w-[545px] mb-10 md:mb-16 lg:mb-0"
        mediaFields={[{ media: project.featuredImage, size: 'full' }]}
        containerClassName="h-[51vw] sm:h-auto lg:h-[340px]"
        imageClassName="h-[51vw] sm:h-auto lg:h-[340px]"
        priority
        lightbox
      />
    </div>
  )
}
