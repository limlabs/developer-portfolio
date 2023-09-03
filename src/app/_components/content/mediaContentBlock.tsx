import { FC } from 'react'

import { Media } from '../../../payload-types'
import { ContentBlock } from './contentBlock'
import { PayloadLink, PayloadLinkType } from './link'
import { MediaBlock } from './mediaBlock'

type LayoutSize = 'oneThird' | 'twoThirds' | 'half' | 'full'

interface MediaContentFields {
  alignment?: 'contentMedia' | 'mediaContent'
  mediaSize?: LayoutSize
  media: Media | string
  mediaFit?: 'contain' | 'cover'
  richText?: unknown
  enableLink?: boolean
  link?: PayloadLinkType
}

export interface MediaContentBlockProps {
  mediaContentFields?: MediaContentFields[]
  priority?: boolean
}

const complimentSizes: Record<LayoutSize, LayoutSize> = {
  oneThird: 'twoThirds',
  twoThirds: 'oneThird',
  half: 'half',
  full: 'full',
}

export const MediaContentBlock: FC<MediaContentBlockProps> = ({ mediaContentFields, priority }) => {
  return (
    <>
      {mediaContentFields?.map(
        ({ alignment, mediaSize, media, richText, link, enableLink, mediaFit }) => {
          const mediaBlock = (
            <MediaBlock
              priority={priority}
              className="h-full  mb-16 lg:mb-0"
              containerClassName="min-h-[70vw] lg:min-h-0 lg:h-[352px]"
              mediaFields={[
                {
                  size: mediaSize,
                  media,
                },
              ]}
            />
          )

          const contentBlock = (
            <ContentBlock
              contentFields={[
                {
                  size: complimentSizes[mediaSize],
                  richText,
                },
              ]}
            />
          )

          let content
          if (alignment === 'contentMedia') {
            content = (
              <>
                {contentBlock}
                {mediaBlock}
              </>
            )
          } else {
            content = (
              <>
                {mediaBlock}
                {contentBlock}
              </>
            )
          }

          if (enableLink) {
            content = (
              <PayloadLink
                link={link}
                className="col-span-6 grid grid-cols-6 mt-8 lg:mt-0 lg:gap-20"
              >
                {content}
              </PayloadLink>
            )
          }

          return content
        },
      )}
    </>
  )
}
