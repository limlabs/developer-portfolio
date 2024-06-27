import type { Block } from 'payload'

import { ProfileUIField } from './CustomBlock'

export const ProfileCTA: Block = {
  slug: 'profile-cta',
  labels: {
    singular: 'Profile Call to Action',
    plural: 'Profile Call to Actions',
  },
  fields: [
    {
      name: 'profileUI',
      type: 'ui',
      admin: {
        components: {
          Field: ProfileUIField,
        },
      },
    },
  ],
}
