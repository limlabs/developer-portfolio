'use client'
import { Media, Project } from '../../../../payload-types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '../../../_components/ui/dialog'
import { MediaCard } from '../../../_components/ui/mediaCard'

interface ProjectImageSectionProps {
  project: Project
}

export const ProjectImageSection = ({ project }: ProjectImageSectionProps) => {
  return (
    <section className="text-muted-foreground lg:grid md:grid grid-cols-1fr/2fr w-full justify-center items-center gap-12 lg:gap-8 md:gap-6  px-6 lg:px-0 md:px-0">
      <div className="pb-12 flex flex-col items-center justify-center w-full">
        <Dialog>
          <DialogTrigger>
            <MediaCard
              src={(project.images[0].image as Media).url}
              caption={(project.images[0].image as Media).alt}
              alt="Marketing Image for Pre-Launch"
              width={500}
              height={500}
            />
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogDescription>
                <MediaCard
                  src={(project.images[0].image as Media).url}
                  caption="Marketing Image"
                  alt="Marketing Image for Pre-Launch"
                  height={(project.images[0].image as Media).height}
                  width={(project.images[0].image as Media).width}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="pb-12 flex flex-col items-center justify-center w-full ">
        <Dialog>
          <DialogTrigger>
            <MediaCard
              src={(project.images[1].image as Media).url}
              caption={(project.images[1].image as Media).alt}
              alt="Marketing Image for Pre-Launch"
              height={420}
              width={800}
            />
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogDescription>
                <MediaCard
                  src={(project.images[1].image as Media).url}
                  caption=""
                  alt="Marketing Image for Pre-Launch"
                  height={(project.images[1].image as Media).height}
                  width={(project.images[1].image as Media).width}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
