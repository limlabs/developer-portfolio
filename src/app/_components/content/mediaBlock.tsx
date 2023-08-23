import { FC } from 'react'
import Image from 'next/image'

import { Media } from '../../../payload-types'
import { cn } from '../../../utilities'
import { Block, BlockProps } from '../ui/block'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

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
      {mediaFields.map(({ media, size, mediaFit }) => {
        const mediaInfo = media as Media
        const base = (
          <>
            <Image
              className={cn('overflow-hidden rounded-3xl w-auto h-full', imageClassName)}
              src={mediaInfo.url}
              alt={mediaInfo.alt}
              fill
              sizes="(min-width: 1024px) 75vw, 90vw"
              style={{ objectFit: mediaFit ?? 'cover' }}
              priority={priority}
            />
            {mediaInfo.alt && mediaFit !== 'contain' && (
              <p className={cn('absolute h-full top-8 flex items-end left-2', captionClassName)}>
                {mediaInfo.alt}
              </p>
            )}
          </>
        )

        const containerClassNames = cn(
          'flex flex-col relative w-full text-left',
          containerClassName,
        )

        if (lightbox) {
          return (
            <Block size={size} className={cn(className)} key={mediaInfo.id}>
              <Dialog>
                <DialogTrigger className={containerClassNames}>{base}</DialogTrigger>
                <DialogContent>
                  <Image
                    className="overflow-hidden rounded-3xl"
                    src={mediaInfo.url}
                    alt={mediaInfo.alt}
                    width={mediaInfo.width}
                    height={mediaInfo.height}
                    style={{ maxHeight: mediaInfo.height }}
                  />
                  {mediaInfo.alt && (
                    <p className={cn('absolute -bottom-8 left-0')}>{mediaInfo.alt}</p>
                  )}
                </DialogContent>
              </Dialog>
            </Block>
          )
        }

        return (
          <Block size={size} className={cn(className, containerClassNames)} key={mediaInfo.id}>
            {base}
          </Block>
        )
      })}
    </>
  )
}
