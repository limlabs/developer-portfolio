import { MediaCard } from '../_components/mediaCard'

export const ProjectImageSection = () => {
  return (
    <section className=" lg:flex  justify-center">
      <div className="w-2/3">
        <MediaCard
          src="/outside-app-4.png"
          caption="Marketing Image for Pre-Launch"
          alt="Marketing Image for Pre-Launch"
          height={350}
          width={350}
        />
      </div>
      <div className="w-2/3">
        <MediaCard
          src="/outside-app-3.png"
          caption="Marketing Image for Pre-Launch"
          alt="Marketing Image for Pre-Launch"
          height={350}
          width={660}
        />
      </div>
    </section>
  )
}
