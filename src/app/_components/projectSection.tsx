import { ProjectCard } from './projectCard'

export const ProjectSection = () => {
  return (
    <div className="bg-transparent lg:flex md:flex flex-wrap justify-center items-center w-full">
      <ProjectCard
        src="/project-1.png"
        projectTitle="Design Design, 2020"
        altText="project 1 title"
      />
      <ProjectCard
        src="/project-2.png"
        projectTitle="Outside App, 2023"
        altText="project 2 title"
      />
      <ProjectCard src="/project-3.png" projectTitle="Design App, 2022" altText="project 3 title" />
      <ProjectCard src="/project-4.png" projectTitle="Art App, 2023" altText="project 4 title" />
    </div>
  )
}
