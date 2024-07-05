import { FC } from 'react'

import { Profile, Project } from '@/payload-types'
import { Block } from '@/components/ui/block'
import { ContentLayout } from '@/components/content/contentLayout'
import { ProfileCTABlock } from '@/components/content/profileCTABlock'
import { RichText } from '@/components/content/richText'
import { BackButton } from './backButton'
import { ProjectDetailsHeadline } from './projectDetailsHeadline'
import { ProjectHero } from './projectHero'

export interface ProjectDetailsProps {
  project: Project
  profile: Profile
}

export const ProjectDetails: FC<ProjectDetailsProps> = ({ project, profile }) => {
  return (
    <>
      <ProfileCTABlock profile={profile} variant="compact" />
      <section className="lg:mb-20 flex flex-col lg:gap-12 lg:block lg:after:table lg:after:clear-both lg:after:float-none">
        <Block className="relative z-10 delay-100 order-2 lg:order-none lg:float-right lg:mb-0">
          <ProjectHero project={project} />
        </Block>
        <Block className="order-1 lg:order-none">
          <ProjectDetailsHeadline project={project} />
        </Block>
        <Block className="relative z-0 delay-200 order-3 lg:order-none lg:max-w-[455px]">
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
