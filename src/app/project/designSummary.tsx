import { MediaCard } from '../_components/mediaCard'

export const DesignSummary = () => {
  return (
    <section className="lg:flex md:flex justify-center items-center w-full py-8">
      <div className="flex justify-evenly text-sm p-8 w-full">
        <MediaCard
          src="/outside-app-2.png"
          caption="Marketing Image for Pre-Launch"
          alt="Marketing Image for Pre-Launch"
          height={350}
          width={660}
        />
      </div>
      <div className=" text-foreground rounded-xl pt-12 lg:pt-0 lg:px-24 px-8  w-full">
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
