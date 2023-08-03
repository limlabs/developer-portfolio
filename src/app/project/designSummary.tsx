import { ProjectCard } from '../_components/mediaCard'

export const DesignSummary = () => {
  return (
    <section className="flex justify-center">
      <div className="w-2/3">
        <ProjectCard
          src="/outside-app-2.png"
          projectTitle="Marketing Image for Pre-Launch"
          altText="Marketing Image for Pre-Launch"
          height={350}
          width={660}
        />
      </div>
      <div className=" text-white rounded-xl pt-12 px-8   max-w-2xl">
        <p className="text-sm mt-4">
          To establish a strong brand presence, I developed the app's visual identity, creating a
          vibrant color scheme and selecting modern typography that resonated with our target
          audience. The objective was to evoke a sense of adventure and connection with nature,
          while also emphasizing the app's ease of use. Working closely with the usability testing
          team, I conducted multiple rounds of user testing and gathered valuable feedback. This
          iterative process allowed us to fine-tune the app's design and address any pain points
          experienced by the testers. As a result, we optimized the app for a seamless and enjoyable
          user experience.
        </p>
      </div>
    </section>
  )
}
