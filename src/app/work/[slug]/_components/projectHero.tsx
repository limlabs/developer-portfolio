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
            className="gap-2 py-2"
            height={400}
            width={500}
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <MediaCard
                src={(project.featuredImage as Media).url}
                caption={(project.featuredImage as Media).alt}
                alt={(project.featuredImage as Media).alt}
                className="gap-2 py-2"
                height={500}
                width={500}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
