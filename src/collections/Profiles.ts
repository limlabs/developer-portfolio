import type { CollectionConfig } from 'payload/types'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'aboutMe',
      type: 'richText',
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        {
          name: 'github',
          label: 'GitHub',
          type: 'text',
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          type: 'text',
        },
        {
          name: 'twitter',
          label: 'Twitter',
          type: 'text',
        },
        {
          name: 'dribble',
          label: 'Dribble',
          type: 'text',
        },
        {
          name: 'youtube',
          label: 'YouTube',
          type: 'text',
        },
      ],
    },
  ],
}
