import payload from 'payload'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function seedMedia() {
  const profileImage = await payload.create({
    collection: 'media',
    data: {
      alt: 'Profile picture',
    },
    filePath: `${__dirname}/media/headshot.png`,
  })

  const designDesignFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design Design app screenshot',
    },
    filePath: `${__dirname}/media/design-design-featured.png`,
  })

  const outsideAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Outside app screenshot',
    },
    filePath: `${__dirname}/media/outside-app-featured.png`,
  })

  const designAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app screenshot',
    },
    filePath: `${__dirname}/media/design-app-featured.png`,
  })

  const artAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Art app screenshot',
    },
    filePath: `${__dirname}/media/art-app-featured.png`,
  })

  const genericMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Generic marketing image one',
    },
    filePath: `${__dirname}/media/generic-1.png`,
  })

  const genericMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Generic marketing image two',
    },
    filePath: `${__dirname}/media/generic-2.png`,
  })

  const genericMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'Generic marketing image three',
    },
    filePath: `${__dirname}/media/generic-3.png`,
  })

  return {
    genericMarketingImageOne,
    genericMarketingImageTwo,
    genericMarketingImageThree,
    profileImage,
    designDesignFeaturedScreenshot,
    outsideAppFeaturedScreenshot,
    designAppFeaturedScreenshot,
    artAppFeaturedScreenshot,
  }
}

export type InitialMedia = Awaited<ReturnType<typeof seedMedia>>
