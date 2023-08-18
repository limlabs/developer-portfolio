'use client'
import { FC } from 'react'
import { Media, Project } from '../../../../payload-types'
import { MediaCard } from '../../../_components/mediaCard'
import { Dialog, DialogContent, DialogTrigger } from '../../../_components/ui/dialog'

interface ProjectHeroProps {
  project: Project
}

export const ProjectHero: FC<ProjectHeroProps> = ({ project }) => {
  return (
    <div className="relative z-10 lg:pl-20 mt-6 lg:mt-0 flex flex-col items-start lg:items-center justify-center md:float-right md:flex-shrink-0">
      {project.technologiesUsed && (
        <>
          <div className="flex justify-start w-full text-lg lg:text-xl">
            <h4>Technologies Used</h4>
          </div>
          <ul className="flex gap-3 w-full text-xl flex-wrap mt-2 mb-4">
            {project.technologiesUsed.map(({ technology }) => (
              <li className="border border-foreground p-2 rounded-md ">{technology}</li>
            ))}
          </ul>
        </>
      )}

      <Dialog>
        <DialogTrigger>
          <MediaCard
            src={(project.featuredImage as Media).url}
            caption={(project.featuredImage as Media).alt}
            alt={(project.featuredImage as Media).alt}
            width={500}
            height={500}
          />
        </DialogTrigger>
        <DialogContent>
          <MediaCard
            src={(project.featuredImage as Media).url}
            caption=""
            alt={(project.featuredImage as Media).alt}
            height={(project.featuredImage as Media).height}
            width={(project.featuredImage as Media).width}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
