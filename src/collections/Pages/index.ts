import type { CollectionConfig } from 'payload/types'

import { loggedIn } from '../../access/loggedIn'
import { publishedOrLoggedIn } from '../../access/publishedOrLoggedIn'
import { Archive } from '../../blocks/Archive'
import { Content } from '../../blocks/Content'
import { Form } from '../../blocks/Form'
import { MediaBlock } from '../../blocks/Media'
import { MediaContent } from '../../blocks/MediaContent'
import { ProjectCards } from '../../blocks/ProjectCards'
import formatSlug from '../../utilities/formatSlug'
import { formatAppURL, revalidatePage } from './hooks/revalidatePage'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    preview: doc => {
      return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        formatAppURL({
          doc,
        }),
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`
    },
  },
  versions: {
    drafts: true,
  },
  access: {
    read: publishedOrLoggedIn,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  hooks: {
    afterChange: [revalidatePage],
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
