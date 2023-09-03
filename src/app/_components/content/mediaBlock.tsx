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
              <Dialog>
                <DialogTrigger
                  className={cn(containerClassNames, 'first:mt-8 first:lg:mt-0 mb-1 lg:mb-0')}
                >
                  {base}
                  {mediaFit === 'contain' && caption}
                </DialogTrigger>
                {mediaFit === 'cover' && caption}
                <DialogContent className="pb-8">
                  <>
                    <div
                      className="relative max-w-[80vw] lg:max-w-none"
                      style={{ width: mediaInfo.width }}
                    >
                      <Image
                        className="overflow-hidden rounded-3xl object-contain"
                        src={mediaInfo.url}
                        alt={mediaInfo.alt}
                        fill
                        sizes="(min-width: 1024px) 75vw, 90vw"
                      />
                    </div>
                    {mediaInfo.alt && (
                      <p className={cn('absolute -bottom-8 left-0')}>{mediaInfo.alt}</p>
                    )}
                  </>
                </DialogContent>
              </Dialog>
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
