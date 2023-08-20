import type { GlobalConfig } from 'payload/types'

import { loggedIn } from '../access/loggedIn'
import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
    update: loggedIn,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
