import { FC } from 'react'

import { RichText } from '../richText'
import { Block, BlockProps } from '../ui/block'

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
