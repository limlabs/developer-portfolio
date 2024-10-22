import { FC } from "react"

import { ContentLayout } from "@/components/content/contentLayout"
import { ProfileCTABlock } from "@/components/content/profileCTABlock"
import { RichText } from "@/components/content/richText"
import { Block } from "@/components/ui/block"
import { Profile, Project } from "@/payload-types"

import { BackButton } from "./backButton"
import { ProjectDetailsHeadline } from "./projectDetailsHeadline"
import { ProjectHero } from "./projectHero"

export interface ProjectDetailsProps {
  project: Project
  profile: Profile
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project, profile }) => {
  return (
    <>
      <ProfileCTABlock profile={profile} variant="compact" />
      <section className="flex flex-col lg:mb-20 lg:block lg:gap-12 lg:after:float-none lg:after:clear-both lg:after:table">
        <Block className="relative z-10 order-2 delay-100 lg:order-none lg:float-right lg:mb-0">
          <ProjectHero project={project} />
        </Block>
        <Block className="order-1 lg:order-none">
          <ProjectDetailsHeadline project={project} />
        </Block>
        <Block className="relative z-0 order-3 delay-200 lg:order-none lg:max-w-[455px]">
          <RichText content={project.description} />
        </Block>
      </section>

      <ContentLayout profile={profile} layout={project.layout} className="mb-20" />
      <div className="text-center lg:text-left">
        <BackButton />
      </div>
    </>
  )
}
