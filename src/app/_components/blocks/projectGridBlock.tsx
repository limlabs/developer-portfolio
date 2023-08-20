import { FC } from 'react'
import Link from 'next/link'

import { Media, Project } from '../../../payload-types'
import { formatMonth } from '../../_utils/date'
import { Block } from '../ui/block'
import { FadeInContent } from '../ui/fadeInContent'
import { MediaCard } from '../ui/mediaCard'

interface ProjectMediaCardProps {
  src: string
  caption: string
  alt: string
  className?: string
}

const ProjectMediaCard: FC<ProjectMediaCardProps> = ({ src, caption, alt, className = '' }) => {
  return (
    <FadeInContent className={`w-full h-full md:mt-0 ${className}`}>
      <MediaCard
        src={src}
        className="h-full w-full object-cover"
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

interface ProjectGridBlockProps {
  projects: Project[]
}

export const ProjectGridBlock: FC<ProjectGridBlockProps> = ({ projects }) => {
  return (
    <Block size="full" className="bg-transparent md:my-20 flex w-full flex-shrink-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map(({ id, title, startDate, featuredImage, slug }, index) => (
          <Link
            href={`/work/${slug}`}
            key={id}
            className="col-span-1 w-[80vw] h-[57vw] lg:w-[35vw] lg:h-[26vw] max-w-[500px] max-h-[376px] mb-8"
          >
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
    </Block>
  )
}
