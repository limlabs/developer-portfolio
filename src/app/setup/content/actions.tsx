'use server'

import { seedMedia as executeSeedMedia, getSeededMedia } from '@/seed/media'
import { seedGlobals as executeSeedGlobals } from '@/seed/globals'
import {
  seedTechnologies as executeSeedTechnologies,
  getSeededTechnologies,
} from '@/seed/technologies'
import { seedPages as executeSeedPages } from '@/seed/pages'
import { seedProjects as executeSeedProjects, getSeededProjects } from '@/seed/projects'
import { getSeededForms, seedForms as executeSeedForms } from '@/seed/forms'
import { getPayload } from '@/utilities/api'

export async function seedMedia() {
  console.log('Seeding media')
  const payload = await getPayload()
  const media = await payload.find({ collection: 'media' })
  if (media.docs.length > 0) {
    console.log('Media already seeded')
    return
  }

  await executeSeedMedia(payload)
}

export async function seedGlobals() {
  console.log('Seeding globals')
  const payload = await getPayload()

  const seededMedia = await getSeededMedia(payload)
  await executeSeedGlobals(payload, seededMedia)
}

export async function seedTechnologies() {
  console.log('Seeding technologies')
  const payload = await getPayload()
  const technologies = await payload.find({ collection: 'technologies' })
  if (technologies.docs.length > 0) {
    console.log('Technologies already seeded')
    return
  }

  await executeSeedTechnologies(payload)
}

export async function seedProjects() {
  console.log('Seeding projects')
  const payload = await getPayload()
  const projects = await payload.find({ collection: 'projects' })
  if (projects.docs.length > 0) {
    console.log('Projects already seeded')
    return
  }

  const media = await getSeededMedia(payload)

  console.log('getting seeded media', media)
  const technologies = await getSeededTechnologies(payload)
  await executeSeedProjects(payload, media, technologies)
}

export async function seedPages() {
  console.log('Seeding pages...')
  const payload = await getPayload()
  const forms = await getSeededForms(payload)
  const media = await getSeededMedia(payload)
  const projects = await getSeededProjects(payload)

  await executeSeedPages(payload, forms, projects, media)
}

export async function seedForms() {
  console.log('Seeding forms...')
  const payload = await getPayload()

  const forms = await getSeededForms(payload)
  if (forms.contactForm) {
    console.log('Forms already seeded')
    return
  }

  await executeSeedForms(payload)
}
