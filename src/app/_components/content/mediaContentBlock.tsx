import { FC } from 'react'

import { Media } from '../../../payload-types'
import { Block } from '../ui/block'
import { ContentBlock } from './contentBlock'
import { PayloadLink, PayloadLinkType } from './link'
import { MediaBlock } from './mediaBlock'

type LayoutSize = 'oneThird' | 'twoThirds' | 'half' | 'full'

interface MediaContentFields {
  alignment?: 'contentMedia' | 'mediaContent'
  mediaSize?: LayoutSize
  media: Media | string
  richText?: unknown
  enableLink?: boolean
  link?: PayloadLinkType
}
export interface MediaContentBlockProps {
  mediaContentFields?: MediaContentFields[]
}

const complimentSizes: Record<LayoutSize, LayoutSize> = {
  oneThird: 'twoThirds',
  twoThirds: 'oneThird',
  half: 'half',
  full: 'full',
}

export const MediaContentBlock: FC<MediaContentBlockProps> = ({ mediaContentFields }) => {
  return mediaContentFields?.map(
    ({ alignment, mediaSize, media, richText, link, enableLink }, index) => {
      const mediaBlock = (
        <MediaBlock
          className="h-[348px]"
          containerClassName="h-[348px]"
          imageClassName="h-[348px]"
          captionClassName="h-[348px]"
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
          <PayloadLink link={link} className="col-span-6 grid grid-cols-6 gap-20">
            {content}
          </PayloadLink>
        )
      }

      return content
    },
  )
}
