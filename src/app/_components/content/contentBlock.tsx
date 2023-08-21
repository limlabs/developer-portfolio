import { FC } from 'react'

import { Block, BlockProps } from '../ui/block'
import { RichText } from '../ui/richText'

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
      {contentFields.map(({ richText, size }) => (
        <Block size={size}>
          <RichText content={richText} />
        </Block>
      ))}
    </>
  )
}
