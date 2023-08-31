import payload from 'payload'

interface MediaAssets {
  // Generic marketing images
  genericMarketingImageOne: any
  genericMarketingImageTwo: any
  genericMarketingImageThree: any
  genericMarketingImageFour: any

  // Profile image
  profileImageDoc: any

  // Design Design app
  designDesignFeaturedScreenshot: any

  // Outside app
  outsideAppFeaturedScreenshot: any

  // Design app
  designAppFeaturedScreenshot: any
  designAppMarketingImageOne: any
  designAppMarketingImageTwo: any
  designAppMarketingImageThree: any
  designAppMarketingImageFour: any

  // Art app
  artAppFeaturedScreenshot: any
}

export async function seedMedia(): Promise<MediaAssets> {
  const profileImageDoc = await payload.create({
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

  const designAppMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image one',
    },
    filePath: `${__dirname}/media/design-app-1.png`,
  })

  const designAppMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image two',
    },
    filePath: `${__dirname}/media/design-app-2.png`,
  })

  const designAppMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image three',
    },
    filePath: `${__dirname}/media/design-app-3.png`,
  })

  const designAppMarketingImageFour = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image four',
    },
    filePath: `${__dirname}/media/design-app-4.png`,
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

  const genericMarketingImageFour = await payload.create({
    collection: 'media',
    data: {
      alt: 'Generic marketing image four',
    },
    filePath: `${__dirname}/media/generic-4.png`,
  })

  return {
    genericMarketingImageOne,
    genericMarketingImageTwo,
    genericMarketingImageThree,
    genericMarketingImageFour,
    profileImageDoc,
    designDesignFeaturedScreenshot,
    outsideAppFeaturedScreenshot,
    designAppFeaturedScreenshot,
    designAppMarketingImageOne,
    designAppMarketingImageTwo,
    designAppMarketingImageThree,
    designAppMarketingImageFour,
    artAppFeaturedScreenshot,
  }
}
