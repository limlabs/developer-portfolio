import formBuilder from '@payloadcms/plugin-form-builder'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Profiles } from './collections/Profiles'
import { Projects } from './collections/Projects'
import { Footer } from './globals/Footer'
import { Header } from './globals/Header'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [Media, Pages, Projects, Profiles],
  globals: [Header, Footer],
  plugins: [formBuilder({})],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
