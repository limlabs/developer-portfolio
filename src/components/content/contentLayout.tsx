import { FC } from "react"

import { Form, Page, Profile, Project } from "@/payload-types"
import { cn } from "@/utilities"

import { ContentBlock, ContentBlockFields } from "./contentBlock"
import { FormBlock } from "./formBlock"
import { MediaBlock, MediaBlockFields } from "./mediaBlock"
import { MediaContentBlock, MediaContentBlockProps } from "./mediaContentBlock"
import { ProfileCTABlock } from "./profileCTABlock"
import { ProjectGridBlock } from "./projectGridBlock"

interface ContentLayoutProps {
  layout?: Page["layout"]
  profile?: Profile
  className?: string
}

export const ContentLayout: FC<ContentLayoutProps> = ({ layout, profile, className }) => {
  let hasMedia = false
  return (
    <div className={cn("grid w-full grid-cols-6 lg:gap-20", className)}>
      {layout?.map((block, index) => {
        let element = null
        switch (block.blockType) {
          case "content":
            element = (
              <ContentBlock
                contentFields={block.contentFields as ContentBlockFields[]}
                key={block.id}
              />
            )
            break
          case "mediaBlock":
            element = (
              <MediaBlock
                containerClassName="h-[70vw] lg:h-[348px]"
                mediaFields={block.mediaFields as MediaBlockFields[]}
                key={block.id}
                priority={!hasMedia}
              />
            )

            hasMedia = true
            break
          case "profile-cta":
            element = <ProfileCTABlock profile={profile} key={block.id} />
            break
          case "projectGrid":
            element = (
              <ProjectGridBlock
                projects={block.project as Project[]}
                key={block.id}
                priority={!hasMedia}
              />
            )
            break
          case "form":
            element = <FormBlock intro={block.richText} form={block.form as Form} key={block.id} />
            break
          case "mediaContent":
            element = (
              <MediaContentBlock
                {...(block as MediaContentBlockProps)}
                priority={!hasMedia}
                key={block.id}
              />
            )
            hasMedia = true
            break
        }

        return element
      })}
    </div>
  )
}
