import Image from 'next/image'

interface MediaCardProps {
  src: string
  projectTitle: string
  altText: string
  height: number
  width: number
}

export const MediaCard = ({ src, projectTitle, altText, height, width }: MediaCardProps) => {
  return (
    <div className="py-4 flex justify-center items-center flex-col gap-4">
      <div className="flex justify-center">
        <Image src={src} alt={altText} width={width} height={height} className="rounded-3xl" />
      </div>
      <div className="flex justify-start w-[324px]">
        <p className="text-xl text-foreground">{projectTitle}</p>
      </div>
    </div>
  )
}
