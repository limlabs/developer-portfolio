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
              height={420}
              width={420}
            />
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <DialogDescription>
                <MediaCard
                  src="/outside-app-4.png"
                  caption="Marketing Image"
                  alt="Marketing Image for Pre-Launch"
                  height={420}
                  width={420}
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
              caption="Marketing Image for Pre-Launch"
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
                  caption="Marketing Image for Pre-Launch"
                  alt="Marketing Image for Pre-Launch"
                  height={420}
                  width={800}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
