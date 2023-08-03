import { MediaCard } from './mediaCard'

export const ProjectsList = () => {
  return (
    <div className="bg-transparent lg:flex md:flex flex-wrap justify-evenly items-center w-full max-w-[1080px] mt-8">
      <MediaCard
        src="/project-1.png"
        projectTitle="Design Design, 2020"
        altText="project 1 title"
        height={200}
        width={324}
      />
      <MediaCard
        src="/project-2.png"
        projectTitle="Outside App, 2020"
        altText="project 2 title"
        height={200}
        width={324}
      />

      <MediaCard
        src="/project-3.png"
        projectTitle="Design App, 2022"
        altText="project 3 title"
        height={200}
        width={324}
      />
      <MediaCard
        src="/project-4.png"
        projectTitle="Art App, 2023"
        altText="project 4 title"
        height={200}
        width={324}
      />
    </div>
  )
}
