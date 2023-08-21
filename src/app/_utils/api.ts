import type { Form, Media, Page, Profile, Project } from '../../payload-types'

export const fetchProfile = async (): Promise<Profile> => {
  const url = `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/globals/profile?locale=en`

  const profile: Profile = await fetch(url)
    .then(res => res.json())
    .then(res => res)

  return profile
}

export const getPageApiUrl = (slug: string): string => {
  return `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/pages?where[slug][equals]=${slug}`
}

export const fetchPage = async (slug: string): Promise<Page> => {
  const url = getPageApiUrl(slug)
  const page: Page = await fetch(url)
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return page
}

export const fetchForm = async (): Promise<Form> => {
  const form: Form = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/forms`)
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return form
}

export const fetchMediaInfo = async (id: string): Promise<Media> => {
  const media: Media = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/media/${id}`).then(
    res => res.json(),
  )

  return media
}

export const fetchProjects = async (): Promise<Project[]> => {
  const projects: Project[] = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/projects`)
    .then(res => res.json())
    .then(res => res?.docs)

  return projects
}

export const fetchProject = async (slug: string): Promise<Project> => {
  const project: Project = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/projects?where[slug][equals]=${slug}`,
    {
      next: { tags: [`projects/${slug}`] },
    },
  )
    .then(res => res.json())
    .then(res => res?.docs?.[0])

  return project
}
