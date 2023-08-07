import type { Payload } from 'payload'

export const seed = async (payload: Payload): Promise<void> => {
  // create admin
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'test',
    },
  })

  const profileImageDoc = await payload.create({
    collection: 'media',
    data: {
      alt: 'Profile picture',
    },
    filePath: `${__dirname}/media/headshot.png`,
  })

  await payload.create({
    collection: 'profiles',
    data: {
      name: 'Samantha Smith',
      location: 'Portland, OR',
      title: 'UI/UX Designer',
      profileImage: profileImageDoc.id,
      socialLinks: {
        github: 'https://github.com/payloadcms',
        linkedin: 'https://www.linkedin.com/company/payloadcms',
        twitter: 'https://twitter.com/payloadcms',
        email: 'info@payloadcms.com',
      },
      aboutMe: [
        {
          text: `Samantha Smith is a visionary artist with a passion for pushing boundaries. She crafts captivating visual stories that leave a lasting impact. Her work reflects a perfect blend of innovation and elegance, whether in logo designs that capture a brand's essence or breathtaking illustrations that transport you to distant realms.`,
        },
      ],
    },
  })
}
