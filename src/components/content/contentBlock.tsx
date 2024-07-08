import { FC, Fragment } from "react"

import { Block, BlockProps } from "@/components/ui/block"

import { PayloadLink, PayloadLinkType } from "./link"
import { RichText } from "./richText"

export interface ContentBlockFields extends BlockProps {
  richText?: unknown
  enableLink?: boolean | null
  link?: PayloadLinkType | null
}

interface ContentBlockProps {
  contentFields?: ContentBlockFields[] | null
}

export const ContentBlock: FC<ContentBlockProps> = ({ contentFields }) => {
  return (
    <Fragment>
      {contentFields?.map(({ richText, size, id, enableLink, link }) => {
        let content = <RichText content={richText} />

        if (enableLink && link) {
          content = <PayloadLink link={link}>{content}</PayloadLink>
        }

        return (
          <Block size={size} key={id} fadeIn={!Boolean(enableLink)}>
            {content}
          </Block>
        )
      })}
    </Fragment>
  )
}
