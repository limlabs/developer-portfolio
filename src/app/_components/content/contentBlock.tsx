import { FC } from 'react'

import { Block, BlockProps } from '../ui/block'
import { RichText } from './richText'

interface ContentBlockFields extends BlockProps {
  richText?: unknown
  enableLink?: boolean
}

interface ContentBlockProps {
  contentFields: ContentBlockFields[]
}

export const ContentBlock: FC<ContentBlockProps> = ({ contentFields }) => {
  return (
    <>
      {contentFields.map(({ richText, size }, index) => (
        <Block size={size} key={index}>
          <RichText content={richText} />
        </Block>
      ))}
    </>
  )
}
