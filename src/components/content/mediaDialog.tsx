'use client'

import { FC, useState } from 'react'
import Image from 'next/image'

import { cn } from '@/utilities'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Media } from '@/payload-types'

interface MediaDialogProps {
  className?: string
  mediaFit?: 'contain' | 'cover'
  triggerContent: React.ReactNode
  caption?: React.ReactNode
  mediaInfo: Media
}

export const MediaDialog: FC<MediaDialogProps> = ({
  className,
  mediaFit,
  triggerContent,
  caption,
  mediaInfo,
}) => {
  const [dialogOpen, setDialogOpen] = useState(false)
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger
        className={cn(className, 'mb-1 first:mt-8 first:md:mt-12 lg:mb-0 first:lg:mt-0')}
      >
        {triggerContent}
        {mediaFit === 'contain' && caption}
      </DialogTrigger>
      {mediaFit === 'cover' && caption}
      <DialogContent
        onClick={() => setDialogOpen(false)}
        showCloseButton
        variant="fullscreen"
        className="flex flex-col items-start justify-center gap-2"
        style={{
          maxHeight: `${mediaInfo.height}px`,
          maxWidth: `${mediaInfo.width}px`,
        }}
      >
        <div
          className="relative h-full w-full"
          style={{
            maxWidth: `${mediaInfo.width}px`,
            height: `min(${((mediaInfo?.height ?? 0) / (mediaInfo?.width ?? 1)) * 100}vw, 80vh)`,
          }}
        >
          <Image
            id={`${mediaInfo.id}-lightbox`}
            className="object-contain"
            src={mediaInfo.url as string}
            alt={mediaInfo.alt as string}
            fill
            sizes="90vw"
          />
        </div>
        {mediaInfo.alt && (
          <div
            className="w-full pl-2 text-center text-sm text-primary sm:pl-0 lg:text-xl"
            style={{ maxWidth: `${mediaInfo.width}px` }}
          >
            {mediaInfo.alt}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
