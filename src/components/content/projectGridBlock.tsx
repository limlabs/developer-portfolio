import { FC } from 'react'
import Link from 'next/link'

import { Media, Project } from '@/payload-types'
import { formatYear } from '@/utilities/format'
import { Block } from '@/components/ui/block'
import { MediaBlock } from './mediaBlock'

const animationDelayOffsets = ['delay-150', 'delay-200']

interface ProjectGridBlockProps {
  projects: Project[]
  priority?: boolean
}

export const ProjectGridBlock: FC<ProjectGridBlockProps> = ({ projects, priority }) => {
  return (
    <Block
      size="full"
      className="flex w-full bg-transparent lg:mb-20 lg:mt-[2.125rem] lg:flex-shrink-0 lg:justify-center"
    >
      <div className="mt-16 grid w-full grid-cols-1 lg:mt-0 lg:grid-cols-2 lg:gap-20 lg:gap-y-2">
        {projects.map(({ id, startDate, slug, title, featuredImage }, index) => (
          <Link
            href={`/projects/${slug}`}
            key={id}
            className="relative col-span-1 mb-14 transition-all last:mb-16 hover:-translate-y-1 lg:mb-8 lg:first:mt-0 last:lg:mb-8"
          >
            <MediaBlock
              lightbox={false}
              className={`${animationDelayOffsets[index % 2]}`}
              imageClassName="h-[56vw] lg:h-[376px]"
              captionSize="large"
              priority={priority}
              mediaFields={[
                {
                  media: {
                    ...(featuredImage as Media),
                    width: 500,
                    height: 376,
                    alt: `${title}, ${formatYear(startDate)}`,
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
