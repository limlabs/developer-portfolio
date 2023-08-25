import type { Form, Header, Media, Page, Profile, Project } from '../../payload-types'

export const fetchProfile = async (): Promise<Profile> => {
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/profile?locale=en`

  const profile: Profile = await fetch(url).then(res => res.json())

  return profile
}

export const fetchHeader = async (): Promise<Header> => {
  const header: Header = await fetch(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/header?locale=en`,
  ).then(res => res.json())

  return header
}

export const getPageApiUrl = (slug: string): string => {
  return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`
}

export const fetchPage = async (slug: string): Promise<Page | undefined> => {
  const url = getPageApiUrl(slug)
  const page: Page = await fetch(url)
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return page
}

export const fetchForm = async (): Promise<Form> => {
  const form: Form = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/forms`)
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return form
}

export const fetchMediaInfo = async (id: string): Promise<Media> => {
  const media: Media = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/media/${id}`).then(
    res => res.json(),
  )

  return media
}

export const fetchProjects = async (): Promise<Project[]> => {
  const projects: Project[] = await fetch(`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/projects`)
    .then(res => res.json())
    .then(res => res?.docs)

  return projects
}

interface FetchProjectOptions {
  draft?: boolean
  draftSecret?: string
  payloadToken?: string
}

export const fetchProject = async (
  slug: string,
  options: FetchProjectOptions,
): Promise<Project> => {
  const qs = new URLSearchParams(`where[slug][equals]=${slug}`)
  const init: RequestInit = {}

  if (options.draft) {
    if (!options.draftSecret) {
      throw new Error('Missing draftSecret')
    }

    if (options.draftSecret !== process.env.PAYLOAD_PUBLIC_DRAFT_SECRET) {
      throw new Error('Invalid draftSecret')
    }

    qs.append('draft', 'true')
    init.cache = 'no-store'
    init.headers = {
      cookie: `payload-token=${options.payloadToken};path=/;HttpOnly`,
    }
  } else {
    init.next = { tags: [`projects/${slug}`] }
  }

  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/projects?${qs.toString()}`
  const project: Project = await fetch(url, init)
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return project
}
