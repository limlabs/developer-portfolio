import Image from 'next/image'
import { Card, CardContent, CardFooter } from './ui/card'

interface ProjectCardProps {
  src: string
  projectTitle: string
  altText: string
}

export const ProjectCard = ({ src, projectTitle, altText }: ProjectCardProps) => {
  return (
    <div className=" py-4 flex justify-center items-center flex-col m-8 gap-4">
      <div className="flex justify-center">
        <Image src={src} alt={altText} width={324} height={220} className="rounded-3xl " />
      </div>
      <div className="flex justify-start w-[324px]">
        <p className="text-xl  text-white">{projectTitle}</p>
      </div>
    </div>
  )
}
