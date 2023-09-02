import { seedForms } from './forms'
import { seedGlobals } from './globals'
import { seedMedia } from './media'
import { seedPages } from './pages'
import { seedProjects } from './projects'
import { seedTechnologies } from './technologies'
import { seedUsers } from './users'

export const seed = async (): Promise<void> => {
  await seedUsers()

  const forms = await seedForms()
  const media = await seedMedia()

  await seedGlobals(media)

  const technologies = await seedTechnologies()
  const projects = await seedProjects(media, technologies)

  await seedPages(forms, projects)
}
