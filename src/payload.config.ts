import formBuilder from '@payloadcms/plugin-form-builder'
import seo from '@payloadcms/plugin-seo'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Projects } from './collections/Projects'
import { Technologies } from './collections/Technologies'
import { Users } from './collections/Users'
import { Header } from './globals/Header'
import { Profile } from './globals/Profile'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Media, Pages, Projects, Technologies, Users],
  globals: [Header, Profile],
  plugins: [
    formBuilder({}),
    seo({
      collections: ['pages', 'projects'],
      uploadsCollection: 'media',
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
