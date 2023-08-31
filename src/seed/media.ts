import payload from 'payload'

interface MediaAssets {
  // Generic marketing images
  genericMarketingImageOne: any
  genericMarketingImageTwo: any
  genericMarketingImageThree: any

  // Profile image
  profileImage: any

  // Design Design app
  designDesignFeaturedScreenshot: any

  // Outside app
  outsideAppFeaturedScreenshot: any

  // Design app
  designAppFeaturedScreenshot: any

  // Art app
  artAppFeaturedScreenshot: any
}

export async function seedMedia(): Promise<MediaAssets> {
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
