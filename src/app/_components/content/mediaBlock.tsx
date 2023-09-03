import { FC } from 'react'
import Image from 'next/image'

import { Media } from '../../../payload-types'
import { cn } from '../../../utilities'
import { Block, BlockProps } from '../ui/block'
import { MediaDialog } from './mediaDialog'

interface MediaBlockFields extends BlockProps {
  media: string | Media
  mediaFit?: 'contain' | 'cover'
}

interface MediaBlockProps {
  mediaFields: MediaBlockFields[]
  lightbox?: boolean
  className?: string
  containerClassName?: string
  imageClassName?: string
  captionClassName?: string
  priority?: boolean
}

export const MediaBlock: FC<MediaBlockProps> = ({
  mediaFields,
  className,
  containerClassName,
  imageClassName,
  captionClassName,
  lightbox = true,
  priority,
}) => {
  return (
    <>
      {mediaFields.map(({ media, size, mediaFit = 'cover' }) => {
        const mediaInfo = media as Media

        const base = (
          <>
            <div
              className={cn(
                'flex-0 flex relative',
                mediaFit === 'cover' ? 'h-full w-auto' : 'h-auto w-full',
              )}
            >
              <Image
                className={cn('overflow-hidden rounded-3xl flex-1', imageClassName)}
                src={mediaInfo.url}
                alt={mediaInfo.alt}
                width={mediaInfo.width}
                height={mediaInfo.height}
                style={{
                  objectFit: mediaFit ?? 'cover',
                }}
                priority={priority}
              />
            </div>
          </>
        )

        const containerClassNames = cn(
          'flex flex-col relative w-full text-left',
          containerClassName,
          mediaFit === 'cover' && 'h-full w-auto',
        )

        const caption = mediaInfo.alt && (
          <p className={cn('flex w-full mt-1 lg:text-xl lg:leading-7', captionClassName)}>
            {mediaInfo.alt}
          </p>
        )

        if (lightbox) {
          return (
            <Block size={size} className={cn('flex-col', className)} key={mediaInfo.id}>
              <MediaDialog
                className={containerClassNames}
                mediaFit={mediaFit}
                triggerContent={base}
                caption={caption}
                mediaInfo={mediaInfo}
              />
            </Block>
          )
        }

        return (
          <Block size={size} className={cn('flex-col', className)} key={mediaInfo.id}>
            {base}
            {caption}
          </Block>
        )
      })}
    </>
  )
}
