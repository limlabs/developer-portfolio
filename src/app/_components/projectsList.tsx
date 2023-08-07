import { FC, Suspense } from 'react'
import Link from 'next/link'

import { Media } from '../../payload-types'
import { fetchProjects } from '../_utils/api'
import { formatMonth } from '../_utils/date'
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
        captionClassName="absolute -bottom-8"
        caption={caption}
        alt={alt}
        priority
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </FadeInContent>
  )
}

const animationDelayOffsets = ['delay-150', 'delay-200']

const ProjectsListContent = async () => {
  const projects = await fetchProjects()

  return (
    <div className="bg-transparent max-w-[1080px] md:mt-40 grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full flex-shrink-0">
      {projects.map(({ id, title, startDate, featuredImage, slug }, index) => (
        <Link href={`/work/${slug}`} key={id}>
          <ProjectMediaCard
            key={id}
            src={(featuredImage as Media)?.url}
            caption={`${title} - ${formatMonth(startDate)}`}
            alt={(featuredImage as Media)?.alt}
            className={`animate-fade-in ${animationDelayOffsets[index % 2]}`}
          />
        </Link>
      ))}
    </div>
  )
}

export const ProjectsList = () => {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      {/* @ts-ignore */}
      <ProjectsListContent />
    </Suspense>
  )
}
