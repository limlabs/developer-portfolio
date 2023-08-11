import type { Block } from 'payload/types'

export const ProfileCTA: Block = {
  slug: 'profile-cta',
  labels: {
    singular: 'Profile Call to Action',
    plural: 'Profile Call to Actions',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'profile',
          type: 'relationship',
          relationTo: 'profiles',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'variant',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Minimal',
              value: 'minimal',
            },
          ],
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}
