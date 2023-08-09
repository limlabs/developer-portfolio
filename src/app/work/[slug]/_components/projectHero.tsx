'use client'
import { FC } from 'react'
import { Media, Project } from '../../../../payload-types'
import { MediaCard } from '../../../_components/mediaCard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '../../../_components/ui/dialog'

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
            className="w-[324px] md:w-[486px] h-[243px] md:h-[376px] m-auto"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </DialogTrigger>
        <DialogContent>
          <MediaCard
            src={(project.featuredImage as Media).url}
            caption=""
            alt={(project.featuredImage as Media).alt}
            className="w-[324px] md:w-[700px] h-[243px] md:h-[486px] lg:w-[1080px] lg:h-[875px] m-auto"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
