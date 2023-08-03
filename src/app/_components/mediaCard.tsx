import Image, { ImageProps } from 'next/image'

type MediaCardProps = ImageProps & {
  caption: string
}

export const MediaCard = ({ caption, className, ...imageProps }: MediaCardProps) => {
  return (
    <div className={`py-4 flex flex-col gap-4 relative ${className}`}>
      <Image {...imageProps} className="rounded-3xl" />
      <p className="text-xl text-foreground absolute -bottom-8">{caption}</p>
    </div>
  )
}
