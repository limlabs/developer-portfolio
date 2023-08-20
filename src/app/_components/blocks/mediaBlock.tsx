import { FC } from 'react'
import Image from 'next/image'

import { Media } from '../../../payload-types'
import { Block, BlockProps } from '../ui/block'

interface MediaBlockFields extends BlockProps {
  media: string | Media
}

interface MediaBlockProps {
  mediaFields: MediaBlockFields[]
}

export const MediaBlock: FC<MediaBlockProps> = ({ mediaFields }) => {
  return (
    <>
      {mediaFields.map(({ media, size }) => {
        const mediaInfo = media as Media
        return (
          <Block size={size} className="relative" style={{ height: mediaInfo.height }}>
            <Image src={mediaInfo.url} alt={mediaInfo.alt} fill style={{ objectFit: 'cover' }} />
          </Block>
        )
      })}
    </>
  )
}
