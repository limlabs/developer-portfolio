import Image, { ImageProps } from 'next/image'

type MediaCardProps = ImageProps & {
  caption: string
}

export const MediaCard = ({ caption, className, ...imageProps }: MediaCardProps) => {
  return (
    <div className={`py-2 flex flex-col gap-2 relative ${className}`}>
      <Image {...imageProps} className="rounded-3xl" priority />
      <p className="text-xl text-foreground  ">{caption}</p>
    </div>
  )
}
