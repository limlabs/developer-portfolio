import { FC } from 'react'

import { Profile, Project } from '../../../../payload-types'
import { FadeInContent } from '../../ui/fadeInContent'
import { ContentLayout } from '../contentLayout'
import { RichText } from '../richText'
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
      <section className="lg:mt-12 flex flex-col lg:gap-12 lg:block">
        <FadeInContent className="relative z-10 delay-100 order-2 lg:order-none lg:float-right mb-16 lg:mb-0">
          <ProjectHero project={project} />
        </FadeInContent>
        <FadeInContent className="order-1 lg:order-none">
          <ProjectDetailsHeadline project={project} />
        </FadeInContent>
        <FadeInContent className="relative z-0 delay-200 order-3 lg:order-none">
          <RichText content={project.description} />
        </FadeInContent>
      </section>
      <section className="w-full lg:mt-8 mb-20">
        <ContentLayout profile={profile} layout={project.layout} />
      </section>
      <BackButton />
    </>
  )
}
