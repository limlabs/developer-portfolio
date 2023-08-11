import type { CollectionConfig } from 'payload/types'

import { loggedIn } from '../../access/loggedIn'
import { publishedOrLoggedIn } from '../../access/publishedOrLoggedIn'
import { Content } from '../../blocks/Content'
import { Form } from '../../blocks/Form'
import { MediaBlock } from '../../blocks/Media'
import { MediaContent } from '../../blocks/MediaContent'
import { ProfileCTA } from '../../blocks/ProfileCTA'
import { ProjectHero } from '../../blocks/ProjectHero'
import formatSlug from '../../utilities/formatSlug'
import { formatAppURL, revalidateProject } from './hooks/revalidateProject'

export const Projects: CollectionConfig = {
  slug: 'projects',
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
    afterChange: [revalidateProject],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Overview',
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'richText',
              required: true,
            },
            {
              name: 'technologiesUsed',
              type: 'relationship',
              relationTo: 'technologies',
              hasMany: true,
              required: true,
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [Content, Form, MediaBlock, MediaContent, ProfileCTA, ProjectHero],
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
    {
      name: 'role',
      type: 'select',
      options: [
        {
          label: 'UI/UX Designer',
          value: 'uiUxDesigner',
        },
        {
          label: 'Front-end Developer',
          value: 'frontEndDeveloper',
        },
        {
          label: 'Back-end Developer',
          value: 'backEndDeveloper',
        },
      ],
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
