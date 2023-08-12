import dotenv from 'dotenv'
import path from 'path'
import formBuilder from '@payloadcms/plugin-form-builder'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Profiles } from './collections/Profiles'
import { Projects } from './collections/Projects'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Pages, Projects, Media, Profiles],
  plugins: [
    formBuilder({
      fields: {
        payment: false,
      },
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
