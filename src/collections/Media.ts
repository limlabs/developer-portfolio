import type { CollectionConfig } from 'payload'

import { loggedIn } from '@/access/loggedIn'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: loggedIn,
    read: () => true,
    update: loggedIn,
    delete: loggedIn,
  },
  upload: {
    staticDir: 'media',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
