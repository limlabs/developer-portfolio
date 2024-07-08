'use server'

import type { Appearance, Header, Page, Profile, Project, User } from '@/payload-types'
import type { DraftOptions } from './preview'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { BasePayload } from 'payload'
import { Options } from 'node_modules/payload/dist/collections/operations/local/find'

export const getPayload = async (): Promise<BasePayload> => {
  return getPayloadHMR({ config: configPromise })
}

export const fetchProfile = async (): Promise<Profile> => {
  const payload = await getPayload()
  const profile = await payload.findGlobal({ slug: 'profile', locale: 'all' })

  return profile
}

export const fetchHeader = async (): Promise<Header> => {
  const payload = await getPayload()
  const header = await payload.findGlobal({ slug: 'header', locale: 'all' })

  return header
}

export const fetchAppearance = async (): Promise<Appearance> => {
  const payload = await getPayload()
  const appearance = await payload.findGlobal({ slug: 'appearance', locale: 'all' })

  return appearance
}

type FetchPageOptions = DraftOptions

export const fetchPage = async (
  slug: string,
  options: FetchPageOptions,
): Promise<Page | undefined> => {
  const opts: Options<'pages'> = { collection: 'pages', where: { slug: { equals: slug } } }

  if (options.draft) {
    options.payloadToken = options.payloadToken ?? ''
    options.draft = true
  }

  const payload = await getPayload()
  const results = await payload.find(opts)

  return results.docs[0]
}

type FetchProjectOptions = DraftOptions

export const fetchProject = async (
  slug: string,
  options: FetchProjectOptions,
): Promise<Project> => {
  const opts: Options<'projects'> = { collection: 'projects', where: { slug: { equals: slug } } }

  if (options.draft) {
    options.payloadToken = options.payloadToken ?? ''
    options.draft = true
  }

  const payload = await getPayload()
  const results = await payload.find(opts)

  return results.docs[0]
}

export const fetchUsers = async (): Promise<User[]> => {
  const payload = await getPayload()
  const users = await payload.find({ collection: 'users' })

  return users.docs
}
