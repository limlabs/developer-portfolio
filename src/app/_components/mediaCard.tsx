import Image, { ImageProps } from 'next/image'

import { FadeInContent } from './fadeInContent'

type MediaCardProps = ImageProps & {
  caption: string
}

export const MediaCard = ({ caption, className, ...imageProps }: MediaCardProps) => {
  return (
    <FadeInContent>
      <div className={`py-2 flex flex-col gap-2 relative ${className}`}>
        <Image {...imageProps} className="rounded-3xl" priority />
        <p className="text-xl text-foreground absolute -bottom-8">{caption}</p>
      </div>
    </FadeInContent>
  )
}
