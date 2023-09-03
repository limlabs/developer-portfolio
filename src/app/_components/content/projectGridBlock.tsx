import { FC } from 'react'
import Link from 'next/link'

import { Media, Project } from '../../../payload-types'
import { formatMonth } from '../../_utils/format'
import { Block } from '../ui/block'
import { MediaBlock } from './mediaBlock'

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
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mt-16 lg:mt-0">
        {projects.map(({ id, startDate, slug, title, featuredImage }, index) => (
          <Link
            href={`/projects/${slug}`}
            key={id}
            className="relative col-span-1 lg:first:mt-0 mb-14 last:mb-16 lg:mb-8 last:lg:mb-8"
          >
            <MediaBlock
              lightbox={false}
              containerClassName={`${animationDelayOffsets[index % 2]} "h-[56vw] lg:h-[376px]"`}
              imageClassName="h-[56vw] lg:h-[376px]"
              priority
              mediaFields={[
                {
                  media: {
                    ...(featuredImage as Media),
                    width: 500,
                    height: 376,
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
