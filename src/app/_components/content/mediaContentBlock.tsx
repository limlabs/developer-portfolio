import { FC } from 'react'

import { Media } from '../../../payload-types'
import { ContentBlock } from './contentBlock'
import { MediaBlock } from './mediaBlock'

type LayoutSize = 'oneThird' | 'twoThirds' | 'half' | 'full'

interface MediaContentFields {
  alignment?: 'contentMedia' | 'mediaContent'
  mediaSize?: LayoutSize
  media: Media | string
  richText?: unknown
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
  return mediaContentFields?.map(({ alignment, mediaSize, media, richText }, index) => {
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

    if (alignment === 'contentMedia') {
      return (
        <>
          {contentBlock}
          {mediaBlock}
        </>
      )
    }

    return (
      <>
        {mediaBlock}
        {contentBlock}
      </>
    )
  })
}
