import { MediaCard } from './mediaCard'

export const ProjectsList = () => {
  return (
    <div className="bg-transparent max-w-[1080px] md:mt-40 grid grid-cols-1 md:grid-cols-2 md:gap-20 w-full">
      <MediaCard
        src="/project-1.png"
        caption="Design Design, 2020"
        alt="project 1 title"
        className="col-span-1 w-[324px] md:w-[500px] h-[243px] md:h-[376px] m-auto mt-20 md:mt-0"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <MediaCard
        src="/project-2.png"
        caption="Outside App, 2020"
        alt="project 2 title"
        className="col-span-1 w-[324px] md:w-[500px] h-[243px] md:h-[376px] m-auto mt-20 md:mt-0"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <MediaCard
        src="/project-3.png"
        caption="Design App, 2022"
        alt="project 3 title"
        className="col-span-1 w-[324px] md:w-[500px] h-[243px] md:h-[376px] m-auto mt-20 md:mt-0"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <MediaCard
        src="/project-4.png"
        caption="Art App, 2023"
        alt="project 4 title"
        className="col-span-1 w-[324px] md:w-[500px] h-[243px] md:h-[376px] m-auto mt-20 md:mt-0"
        priority
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}
