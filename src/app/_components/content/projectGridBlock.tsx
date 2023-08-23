import { FC } from 'react'
import Link from 'next/link'

import { Media, Project } from '../../../payload-types'
import { formatMonth } from '../../_utils/format'
import { Block } from '../ui/block'
import { FadeInContent } from '../ui/fadeInContent'
import { MediaBlock } from './mediaBlock'

interface ProjectMediaCardProps {
  media: Media | string
  className?: string
}

const ProjectMediaCard: FC<ProjectMediaCardProps> = ({ media, className = '' }) => {
  return <FadeInContent className={className}></FadeInContent>
}

const animationDelayOffsets = ['delay-150', 'delay-200']

interface ProjectGridBlockProps {
  projects: Project[]
}

export const ProjectGridBlock: FC<ProjectGridBlockProps> = ({ projects }) => {
  return (
    <Block
      size="full"
      className="bg-transparent lg:my-20 flex w-full lg:flex-shrink-0 lg:justify-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mb-20 lg:mb-0">
        {projects.map(({ id, startDate, slug, title, featuredImage }, index) => (
          <Link
            href={`/projects/${slug}`}
            key={id}
            className="relative col-span-1 mb-16 first:mt-16 lg:first:mt-0 lg:mb-8"
          >
            <MediaBlock
              lightbox={false}
              className="h-[243px] lg:h-[376px]"
              containerClassName={`${animationDelayOffsets[index % 2]}`}
              mediaFields={[
                {
                  media: {
                    ...(featuredImage as Media),
                    alt: `${title} - ${formatMonth(startDate)}`,
                  },
                  size: 'half',
                },
              ]}
            />
          </Link>
        ))}
      </div>
    </Block>
  )
}
