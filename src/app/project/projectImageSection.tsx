import { ProjectCard } from '../_components/projectCard'

export const ProjectImageSection = () => {
  return (
    <section className=" lg:flex  justify-center">
      <div className="w-2/3">
        <ProjectCard
          src="/outside-app-4.png"
          projectTitle="Marketing Image for Pre-Launch"
          altText="Marketing Image for Pre-Launch"
          height={350}
          width={350}
        />
      </div>
      <div className="w-2/3">
        <ProjectCard
          src="/outside-app-3.png"
          projectTitle="Marketing Image for Pre-Launch"
          altText="Marketing Image for Pre-Launch"
          height={350}
          width={660}
        />
      </div>
    </section>
  )
}
