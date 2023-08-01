import Image from 'next/image'
import { Card, CardContent, CardFooter } from './ui/card'

interface ProjectCardProps {
  src: string
  projectTitle: string
  altText: string
}

export const ProjectCard = ({ src, projectTitle, altText }: ProjectCardProps) => {
  return (
    <div>
      <Card className="bg-transparent border-none py-4">
        <CardContent>
          <Image src={src} alt={altText} width={324} height={220} className="rounded-3xl" />
        </CardContent>
        <CardFooter>
          <p className="text-xl text-white">{projectTitle}</p>
        </CardFooter>
      </Card>
    </div>
  )
}
