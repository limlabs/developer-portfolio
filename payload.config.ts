import path from 'path'
// import { postgresAdapter } from '@payloadcms/db-postgres'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { seoPlugin } from '@payloadcms/plugin-seo'

import { en } from 'payload/i18n/en'
import { slateEditor } from '@payloadcms/richtext-slate'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Media } from '@/collections/Media'
import Pages from '@/collections/Pages'
import { Projects } from '@/collections/Projects'
import { Technologies } from '@/collections/Technologies'
import { Users } from '@/collections/Users'
import { Header } from '@/globals/Header'
import { Profile } from '@/globals/Profile'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  
  editor: slateEditor({}),
  collections: [
    Media,
    Pages,
    Projects,
    Technologies,
    Users
  ],
  globals: [Header, Profile],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  // db: postgresAdapter({
  //   pool: {
  //     connectionString: process.env.POSTGRES_URI || ''
  //   }
  // }),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,

  plugins: [
    formBuilderPlugin({
      fields: {
        payment: false,
        checkbox: false,
        country: false,
        email: true,
        message: true,
        number: false,
        text: true,
        textarea: true,
        select: false,
        state: false,
      },
    }),
    seoPlugin({
      collections: ['pages', 'projects'],
      uploadsCollection: 'media',
    }),
  ]
})
