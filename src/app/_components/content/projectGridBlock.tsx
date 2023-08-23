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
      className="bg-transparent lg:my-20 flex w-full flex-shrink-0 lg:justify-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {projects.map(({ id, startDate, slug, title, featuredImage }, index) => (
          <Link href={`/projects/${slug}`} key={id} className="relative col-span-1 h-[376px]">
            <MediaBlock
              lightbox={false}
              className="max-h-[376px]"
              containerClassName={`max-h-[376px] h-full lg:h-[376px] ${
                animationDelayOffsets[index % 2]
              }`}
              imageClassName="max-h-[376px]"
              captionClassName="max-h-[376px]"
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
