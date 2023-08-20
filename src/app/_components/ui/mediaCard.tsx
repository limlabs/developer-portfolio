import Image, { ImageProps } from 'next/image'

type MediaCardProps = ImageProps & {
  caption: string
  captionClassName?: string
}

export const MediaCard = ({
  caption,
  className,
  captionClassName = '',
  ...imageProps
}: MediaCardProps) => {
  return (
    <div className={`flex flex-col relative ${className}`}>
      <Image {...imageProps} className="rounded-3xl" priority />
      <p className={`text-lg text-foreground ${captionClassName}`}>{caption}</p>
    </div>
  )
}
