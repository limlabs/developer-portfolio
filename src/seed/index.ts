import type { Payload } from 'payload'

const mockDescription = [
  {
    text: `As Lead UI/UX Designer for the "Outside App," I spearheaded the creation of an innovative
            mobile platform connecting users with nature. Conducting extensive research, I ideated
            with the team to design user-friendly interfaces and seamless navigation. Crafting a
            vibrant visual identity, we aimed to evoke adventure and user engagement.`,
  },
  {
    text: `Iterative testing and refinement ensured a smooth user experience. 
            The app's successful launch garnered a thriving community of outdoor enthusiasts, 
            facilitating discovery of new trails and sustainable outdoor events. Witnessing the 
            positive impact of reconnecting people with nature has been incredibly rewarding. 
            As a UI/UX designer, I take pride in crafting meaningful digital experiences that inspire 
            a love for the great outdoors.`,
  },
  {
    text: `To establish a strong brand presence, I developed the app's visual identity, 
            creating a vibrant color scheme and selecting modern typography that resonated with our target audience.
            The objective was to evoke a sense of adventure and connection with nature, while also emphasizing the app's 
            ease of use.`,
  },
  {
    text: `Working closely with the usability testing team, I conducted multiple rounds of user testing and gathered 
            valuable feedback. This iterative process allowed us to fine-tune the app's design and address 
            any pain points experienced by the testers. As a result, we optimized the app for a seamless and 
            enjoyable user experience.`,
  },
]

export const seed = async (payload: Payload): Promise<void> => {
  // create admin
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'test',
    },
  })

  const [
    profileImageDoc,
    designDesignFeaturedScreenshot,
    outsideAppFeaturedScreenshot,
    designAppFeaturedScreenshot,
    artAppFeaturedScreenshot,
  ] = await Promise.all([
    payload.create({
      collection: 'media',
      data: {
        alt: 'Profile picture',
      },
      filePath: `${__dirname}/media/headshot.png`,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Design Design app screenshot',
      },
      filePath: `${__dirname}/media/design-design.png`,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Outside app screenshot',
      },
      filePath: `${__dirname}/media/outside-app.png`,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Design app screenshot',
      },
      filePath: `${__dirname}/media/design-app.png`,
    }),
    payload.create({
      collection: 'media',
      data: {
        alt: 'Art app screenshot',
      },
      filePath: `${__dirname}/media/art-app.png`,
    }),
  ])

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

  await Promise.all([
    payload.create({
      collection: 'projects',
      data: {
        title: 'Design Design',
        role: 'UI/UX Designer',
        startDate: new Date('2020-01-01'),
        endDate: new Date('2020-01-31'),
        description: mockDescription,
        technologiesUsed: [
          {
            technology: 'Figma',
          },
          {
            technology: 'Illustrator',
          },
          {
            technology: 'After Effects',
          },
          {
            technology: 'Webflow',
          },
        ],
        featuredImage: designDesignFeaturedScreenshot.id,
      },
    }),
    payload.create({
      collection: 'projects',
      data: {
        title: 'Outside App',
        role: 'UI/UX Designer',
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-02-28'),
        description: mockDescription,
        technologiesUsed: [
          {
            technology: 'Figma',
          },
          {
            technology: 'Illustrator',
          },
          {
            technology: 'After Effects',
          },
          {
            technology: 'Webflow',
          },
        ],
        featuredImage: outsideAppFeaturedScreenshot.id,
      },
    }),
    payload.create({
      collection: 'projects',
      data: {
        title: 'Design App',
        role: 'UI/UX Designer',
        startDate: new Date('2021-03-01'),
        endDate: new Date('2021-03-31'),
        description: mockDescription,
        technologiesUsed: [
          {
            technology: 'Figma',
          },
          {
            technology: 'Illustrator',
          },
          {
            technology: 'After Effects',
          },
          {
            technology: 'Webflow',
          },
        ],
        featuredImage: designAppFeaturedScreenshot.id,
      },
    }),
    payload.create({
      collection: 'projects',
      data: {
        title: 'Art App',
        role: 'UI/UX Designer',
        startDate: new Date('2021-04-01'),
        endDate: new Date('2021-04-30'),
        description: mockDescription,
        technologiesUsed: [
          {
            technology: 'Figma',
          },
          {
            technology: 'Illustrator',
          },
          {
            technology: 'After Effects',
          },
          {
            technology: 'Webflow',
          },
        ],
        featuredImage: artAppFeaturedScreenshot.id,
      },
    }),
  ])
}
