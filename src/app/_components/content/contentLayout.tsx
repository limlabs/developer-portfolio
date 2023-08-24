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
  let hasMedia = false
  return (
    <div className="w-full grid grid-cols-6 lg:gap-20">
      {layout?.map((block, index) => {
        let element = null
        switch (block.blockType) {
          case 'content':
            element = <ContentBlock contentFields={block.contentFields} key={block.id} />
            break
          case 'mediaBlock':
            element = (
              <MediaBlock
                containerClassName="h-[70vw] lg:h-[348px]"
                mediaFields={block.mediaFields}
                key={block.id}
                priority={!hasMedia}
              />
            )

            hasMedia = true
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
            element = <MediaContentBlock {...block} priority={!hasMedia} key={block.id} />
            hasMedia = true
            break
        }

        return element
      })}
    </div>
  )
}
