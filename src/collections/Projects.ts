import type { CollectionConfig } from 'payload'

import { loggedIn } from '@/access/loggedIn'
import { publishedOrLoggedIn } from '@/access/publishedOrLoggedIn'
import { serverUrl } from '@/utilities/api'
import { Content } from '@/blocks/Content'
import { Form } from '@/blocks/Form'
import { MediaBlock } from '@/blocks/Media'
import { MediaContent } from '@/blocks/MediaContent'
import formatSlug from '@/utilities/formatSlug'
import { tagRevalidator } from '@/utilities/tagRevalidator'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    preview: (doc: any) => {
      return `${serverUrl}/projects/${doc.slug}?preview=true`
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
    afterChange: [tagRevalidator((doc: any) => `projects/${doc.slug}`) as any],
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
              blocks: [Content, Form, MediaBlock, MediaContent],
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
      hasMany: true,
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
