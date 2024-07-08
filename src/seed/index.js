import { seedForms } from './forms.js'
import { seedGlobals } from './globals.js'
import { seedMedia } from './media.js'
import { seedPages } from './pages.js'
import { seedProjects } from './projects.js'
import { seedTechnologies } from './technologies.js'
import { seedUsers } from './users.js'

import { getPayload } from 'payload'
import { importConfig } from 'payload/node'
import 'dotenv/config'

export const seed = async payload => {
  console.log('Seeding data')
  await seedUsers(payload)

  const forms = await seedForms(payload)
  const media = await seedMedia(payload)

  await seedGlobals(payload, media)

  const technologies = await seedTechnologies(payload)
  const projects = await seedProjects(payload, media, technologies)

  await seedPages(payload, forms, projects, media)

  console.log('Data seeded')
}
;(async function () {
  const awaitedConfig = await importConfig('../../payload.config.ts')
  const payload = await getPayload({ config: awaitedConfig })
  await seed(payload)
  process.exit(0)
})()
