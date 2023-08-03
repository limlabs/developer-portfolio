import { ProjectCard } from '../_components/projectCard'

export const ProjectSummary = () => {
  return (
    <section className="lg:flex md:flex justify-center items-center w-full">
      <div className=" text-foreground rounded-xl pt-12 lg:pt-0 px-8  max-w-2xl w-full">
        <h1 className="font-extrabold leading-[30-px] text-2xl">Outside App</h1>
        <p className="leading-7 text-base">Feb 2023-June 2023</p>
        <h4 className="font-semibold leading-tight text-base">Lead UI/UX Designer</h4>
        <p className="text-sm mt-4">
          As Lead UI/UX Designer for the "Outside App," I spearheaded the creation of an innovative
          mobile platform connecting users with nature. Conducting extensive research, I ideated
          with the team to design user-friendly interfaces and seamless navigation. Crafting a
          vibrant visual identity, we aimed to evoke adventure and user engagement. Iterative
          testing and refinement ensured a smooth user experience. The app's successful launch
          garnered a thriving community of outdoor enthusiasts, facilitating discovery of new trails
          and sustainable outdoor events. Witnessing the positive impact of reconnecting people with
          nature has been incredibly rewarding. As a UI/UX designer, I take pride in crafting
          meaningful digital experiences that inspire a love for the great outdoors.
        </p>
      </div>
      <div className="text-white p-6">
        <h4 className="text-lg py-4">Technologies Used</h4>
        <ul className="flex justify-evenly text-sm">
          <li className="border p-2 rounded-md m-2">Illustrator</li>
          <li className="border p-2 rounded-md m-2">Figma</li>
          <li className="border p-2 rounded-md m-2">InVision</li>
          <li className="border p-2 rounded-md m-2">Webflow</li>
        </ul>
        <ProjectCard
          src="/project-2.png"
          projectTitle="Outside App, 2023"
          altText="project 2 title"
          height={550}
          width={350}
        />
      </div>
    </section>
  )
}
