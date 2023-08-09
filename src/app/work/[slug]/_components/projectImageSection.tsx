'use client'
import { MediaCard } from '../../../_components/mediaCard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../_components/ui/dialog'

export const ProjectImageSection = () => {
  return (
    <section className="text-muted-foreground lg:grid md:grid grid-cols-1fr/2fr w-full justify-center items-center gap-12 lg:gap-8  px-6 lg:px-0">
      <div className="pb-12 flex flex-col items-center justify-center w-full">
        <Dialog>
          <DialogTrigger>
            <MediaCard
              src="/outside-app-4.png"
              caption="Marketing Image"
              alt="Marketing Image for Pre-Launch"
              className="w-[243px] md:w-[486px] h-[243px] md:h-[376px] lg:h-[340px] lg:w-[340px] m-auto"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogDescription>
                <MediaCard
                  src="/outside-app-4.png"
                  caption="Marketing Image"
                  alt="Marketing Image for Pre-Launch"
                  className="w-[324px] md:w-[700px] h-[243px] md:h-[486px] lg:w-[1080px] lg:h-[875px] m-auto"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
              src="/outside-app-3.png"
              caption=""
              alt="Marketing Image for Pre-Launch"
              height={420}
              width={800}
            />
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogDescription>
                <MediaCard
                  src="/outside-app-3.png"
                  caption=""
                  alt="Marketing Image for Pre-Launch"
                  className="w-[324px] md:w-[700px] h-[243px] md:h-[486px] lg:w-[1080px] lg:h-[875px] m-auto"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
