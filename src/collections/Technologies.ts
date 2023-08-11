import type { CollectionConfig } from 'payload/types'

import { loggedIn } from '../access/loggedIn'

export const Technologies: CollectionConfig = {
  slug: 'technologies',
  admin: {
    useAsTitle: 'technology',
  },
  access: {
    create: loggedIn,
    read: () => true,
    update: loggedIn,
    delete: loggedIn,
  },
  fields: [
    {
      name: 'technology',
      type: 'text',
      required: true,
      admin: {
        width: '25%',
      },
    },
  ],
}
