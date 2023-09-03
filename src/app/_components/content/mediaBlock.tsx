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
            <div className="flex-0 flex w-full h-full relative">
              <Image
                className={cn('overflow-hidden rounded-3xl flex-1 w-full h-full', imageClassName)}
                src={mediaInfo.url}
                alt={mediaInfo.alt}
                fill
                sizes="(min-width: 1024px) 75vw, 90vw"
                style={{
                  objectFit: mediaFit ?? 'cover',
                  maxWidth: mediaInfo.width,
                  maxHeight: mediaInfo.height,
                }}
                priority={priority}
              />
            </div>
          </>
        )

        const containerClassNames = cn(
          'flex flex-col relative w-full h-full text-left',
          containerClassName,
        )

        if (lightbox) {
          return (
            <Block size={size} className={cn('flex-col', className)} key={mediaInfo.id}>
              <Dialog>
                <DialogTrigger
                  className={cn(containerClassNames, 'first:mt-8 first:lg:mt-0 mb-16 lg:mb-0')}
                >
                  {base}
                </DialogTrigger>
                {mediaInfo.alt && (
                  <p className={cn('flex w-full ', captionClassName)}>{mediaInfo.alt}</p>
                )}
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
          <Block size={size} className={cn(className)} key={mediaInfo.id}>
            {base}
          </Block>
        )
      })}
    </>
  )
}
