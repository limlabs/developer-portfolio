import { FC } from 'react'

import { Form, Page, Profile, Project } from '../../../payload-types'
import { FadeInContent } from '../ui/fadeInContent'
import { ContentBlock } from './contentBlock'
import { FormBlock } from './formBlock'
import { MediaBlock } from './mediaBlock'
import { MediaContentBlock } from './mediaContentBlock'
import { ProfileCTABlock } from './profileCTABlock'
import { ProjectGridBlock } from './projectGridBlock'

interface ContentLayoutProps {
  layout?: Page['layout']
  profile?: Profile
}

export const ContentLayout: FC<ContentLayoutProps> = ({ layout, profile }) => {
  return (
    <div className="w-full grid grid-cols-6 gap-20">
      {layout?.map(block => {
        let element = null
        switch (block.blockType) {
          case 'content':
            element = <ContentBlock contentFields={block.contentFields} key={block.id} />
            break
          case 'mediaBlock':
            element = (
              <MediaBlock
                className="h-[348px]"
                containerClassName="h-[348px]"
                imageClassName="h-[348px]"
                captionClassName="h-[348px]"
                mediaFields={block.mediaFields}
                key={block.id}
              />
            )
            break
          case 'profile-cta':
            element = <ProfileCTABlock profile={profile} key={block.id} />
            break
          case 'projectGrid':
            element = <ProjectGridBlock projects={block.project as Project[]} key={block.id} />
            break
          case 'form':
            element = <FormBlock intro={block.richText} form={block.form as Form} key={block.id} />
            break
          case 'mediaContent':
            element = <MediaContentBlock {...block} key={block.id} />
            break
        }

        return element
      })}
    </div>
  )
}
