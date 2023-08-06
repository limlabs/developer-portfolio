import { FC } from 'react'

import { FadeInContent } from './fadeInContent'
import { MediaCard } from './mediaCard'

interface ProjectMediaCardProps {
  src: string
  caption: string
  alt: string
  className?: string
}

const ProjectMediaCard: FC<ProjectMediaCardProps> = ({ src, caption, alt, className = '' }) => {
  return (
    <FadeInContent className={`col-span-1 mt-20 md:mt-0 ${className}`}>
      <MediaCard
        src={src}
        className="w-[324px] md:w-[500px] h-[243px] md:h-[376px] m-auto"
        caption={caption}
        alt={alt}
        priority
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </FadeInContent>
  )
}

export const ProjectsList = () => {
  return (
    <div className="bg-transparent max-w-[1080px] md:mt-40 grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full">
      <ProjectMediaCard src="/project-1.png" caption="Design Design, 2020" alt="project 1 title" />
      <ProjectMediaCard
        src="/project-2.png"
        caption="Outside App, 2020"
        alt="project 2 title"
        className="delay-100"
      />
      <ProjectMediaCard src="/project-3.png" caption="Design App, 2022" alt="project 3 title" />
      <ProjectMediaCard
        src="/project-4.png"
        caption="Art App, 2023"
        alt="project 4 title"
        className="delay-100"
      />
    </div>
  )
}
