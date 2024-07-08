"use client"
import { FC } from "react"

import { MediaBlock } from "@/components/content/mediaBlock"
import { Project } from "@/payload-types"

import { TechnologiesUsed } from "./technologiesUsed"

interface ProjectHeroProps {
  project: Project
}

export const ProjectHero: FC<ProjectHeroProps> = ({ project }) => {
  return (
    <div className="relative z-10 col-span-6 mt-6 flex flex-col items-start justify-center lg:col-span-3 lg:mt-0 lg:flex-shrink-0 lg:items-center lg:pl-20">
      {project.technologiesUsed && <TechnologiesUsed technologies={project.technologiesUsed} />}
      <MediaBlock
        className="mb-10 w-full md:mb-16 lg:mb-0 lg:max-w-[545px]"
        mediaFields={[{ media: project.featuredImage as string, size: "full" }]}
        containerClassName="h-[51vw] sm:h-auto lg:h-[340px]"
        imageClassName="h-[51vw] sm:h-auto lg:h-[340px]"
        priority
        lightbox
      />
    </div>
  )
}
