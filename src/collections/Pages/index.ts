import type { CollectionConfig } from 'payload/types'

import { Archive } from '../../blocks/Archive'
import { Content } from '../../blocks/Content'
import { Form } from '../../blocks/Form'
import { MediaBlock } from '../../blocks/Media'
import { MediaContent } from '../../blocks/MediaContent'
import { ProjectCards } from '../../blocks/ProjectCards'
import formatSlug from '../../utilities/formatSlug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'richText',
              type: 'richText',
              label: 'Content',
            },
          ],
        },
        {
          label: 'Blocks',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Archive, Content, Form, MediaBlock, MediaContent, ProjectCards],
            },
          ],
        },
      ],
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
    },
  ],
}

export default Pages
