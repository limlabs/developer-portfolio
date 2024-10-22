"use server"

import { Options } from "node_modules/payload/dist/collections/operations/local/find"
import { BasePayload } from "payload"

import type { Header, Page, Profile, Project, User } from "@/payload-types"
import configPromise from "@payload-config"
import { getPayloadHMR } from "@payloadcms/next/utilities"

import type { DraftOptions } from "./preview"

export const getPayload = async (): Promise<BasePayload> => {
  return getPayloadHMR({ config: configPromise })
}

export const fetchProfile = async (): Promise<Profile> => {
  const payload = await getPayload()
  const profile = await payload.findGlobal({ slug: "profile", locale: "all" })

  return profile
}

export const fetchHeader = async (): Promise<Header> => {
  const payload = await getPayload()
  const header = await payload.findGlobal({ slug: "header", locale: "all" })

  return header
}

type FetchPageOptions = DraftOptions

export const fetchPage = async (
  slug: string,
  options: FetchPageOptions,
): Promise<Page | undefined> => {
  const opts: Options<"pages"> = { collection: "pages", where: { slug: { equals: slug } } }

  if (options.draft) {
    options.payloadToken = options.payloadToken ?? ""
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
  const opts: Options<"projects"> = { collection: "projects", where: { slug: { equals: slug } } }

  if (options.draft) {
    options.payloadToken = options.payloadToken ?? ""
    options.draft = true
  }

  const payload = await getPayload()
  const results = await payload.find(opts)

  return results.docs[0]
}

export const fetchUsers = async (): Promise<User[]> => {
  const payload = await getPayload()
  const users = await payload.find({ collection: "users" })

  return users.docs
}
