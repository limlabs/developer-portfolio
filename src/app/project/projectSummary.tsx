import { MediaCard } from '../_components/mediaCard'

export const ProjectSummary = () => {
  return (
    <section className=" lg:flex md:flex flex-row-reverse  justify-center items-center  w-full">
      <div className="text-foreground p-6 lg:p-0 w-full flex flex-col items-start lg:items-center justify-center">
        <div className=" flex justify-start w-full lg:px-12  text-xl py-2  ">
          <h4 className="">Technologies Used</h4>
        </div>
        <ul className="flex justify-between w-full  text-xl lg:px-12 flex-wrap ">
          <li className="border border-foreground p-2 rounded-md m-2 ">Illustrator</li>
          <li className="border p-2 rounded-md m-2  border-foreground">Figma</li>
          <li className="border p-2 rounded-md m-2  border-foreground">InVision</li>
          <li className="border border-foreground p-2 rounded-md m-2">Webflow</li>
        </ul>
        <MediaCard
          src="/project-2.png"
          caption="Outside App, 2023"
          alt="project 2 title"
          height={400}
          width={500}
        />
      </div>
      <div className=" text-foreground  pt-8 lg:pt-0 lg:pr-16 px-6 lg:px-0  w-full">
        <h1 className="font-extrabold leading-[30-px] text-5xl">Outside App</h1>
        <p className="leading-7 text-base">Feb 2023-June 2023</p>
        <h4 className="font-semibold leading-tight text-base">Lead UI/UX Designer</h4>
        <p className="text-sm mt-4 pb-2">
          As Lead UI/UX Designer for the "Outside App," I spearheaded the creation of an innovative
          mobile platform connecting users with nature. Conducting extensive research, I ideated
          with the team to design user-friendly interfaces and seamless navigation. Crafting a
          vibrant visual identity, we aimed to evoke adventure and user engagement.
        </p>
        <p className="text-sm mt-4 ">
          Iterative testing and refinement ensured a smooth user experience. The app's successful
          launch garnered a thriving community of outdoor enthusiasts, facilitating discovery of new
          trails and sustainable outdoor events. Witnessing the positive impact of reconnecting
          people with nature has been incredibly rewarding. As a UI/UX designer, I take pride in
          crafting meaningful digital experiences that inspire a love for the great outdoors.
        </p>
      </div>
    </section>
  )
}
