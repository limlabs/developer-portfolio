"use server"

import { cookies } from "next/headers"

import { getSeededForms, seedForms as executeSeedForms } from "@/seed/forms"
import { seedGlobals as executeSeedGlobals } from "@/seed/globals"
import { getSeededMedia, seedMedia as executeSeedMedia } from "@/seed/media"
import { seedPages as executeSeedPages } from "@/seed/pages"
import { getSeededProjects, seedProjects as executeSeedProjects } from "@/seed/projects"
import {
  getSeededTechnologies,
  seedTechnologies as executeSeedTechnologies,
} from "@/seed/technologies"
import { getPayload } from "@/utilities/api"

export async function authorize() {
  const token = cookies().get("payload-token")
  const payload = await getPayload()
  const authResult = await payload.auth({
    headers: new Headers({
      Authorization: `Bearer ${token?.value}`,
    }),
  })

  if (!authResult.permissions.canAccessAdmin) {
    throw new Error("Unauthorized")
  }
}

export async function seedMedia() {
  await authorize()
  console.log("Seeding media")
  const payload = await getPayload()
  const media = await payload.find({ collection: "media" })
  if (media.totalDocs > 0) {
    console.log("Media already seeded")
    return
  }

  await executeSeedMedia(payload)
}

export async function seedGlobals() {
  await authorize()
  console.log("Seeding globals")
  const payload = await getPayload()

  const seededMedia = await getSeededMedia(payload)
  await executeSeedGlobals(payload, seededMedia)
}

export async function seedTechnologies() {
  await authorize()
  console.log("Seeding technologies")
  const payload = await getPayload()
  const technologies = await payload.find({ collection: "technologies" })
  if (technologies.totalDocs > 0) {
    console.log("Technologies already seeded")
    return
  }

  await executeSeedTechnologies(payload)
}

export async function seedProjects() {
  await authorize()
  console.log("Seeding projects")
  const payload = await getPayload()
  const projects = await payload.find({ collection: "projects" })
  if (projects.totalDocs > 0) {
    console.log("Projects already seeded")
    return
  }

  const media = await getSeededMedia(payload)

  console.log("getting seeded media", media)
  const technologies = await getSeededTechnologies(payload)
  await executeSeedProjects(payload, media, technologies)
}

export async function seedPages() {
  await authorize()
  console.log("Seeding pages...")
  const payload = await getPayload()
  const forms = await getSeededForms(payload)
  const media = await getSeededMedia(payload)
  const projects = await getSeededProjects(payload)

  const pages = await payload.find({ collection: "pages" })
  if (pages.totalDocs > 0) {
    console.log("Pages already seeded")
    return
  }

  await executeSeedPages(payload, forms, projects, media)
}

export async function seedForms() {
  await authorize()
  console.log("Seeding forms...")
  const payload = await getPayload()

  const forms = await payload.find({ collection: "forms" })
  if (forms.totalDocs > 0) {
    console.log("Forms already seeded")
    return
  }

  await executeSeedForms(payload)
}
