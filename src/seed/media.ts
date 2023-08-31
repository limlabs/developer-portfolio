import payload from 'payload'

interface MediaAssets {
  profileImageDoc: any
  designDesignFeaturedScreenshot: any
  designDesignMarketingImageOne: any
  designDesignMarketingImageTwo: any
  designDesignMarketingImageThree: any
  outsideAppFeaturedScreenshot: any
  outsideAppMarketingImageOne: any
  outsideAppMarketingImageTwo: any
  outsideAppMarketingImageThree: any
  outsideAppMarketingImageFour: any
  designAppFeaturedScreenshot: any
  designAppMarketingImageOne: any
  designAppMarketingImageTwo: any
  designAppMarketingImageThree: any
  designAppMarketingImageFour: any
  artAppFeaturedScreenshot: any
  artAppMarketingImageOne: any
  artAppMarketingImageTwo: any
  artAppMarketingImageThree: any
}

export async function seedMedia(): Promise<MediaAssets> {
  const profileImageDoc = await payload.create({
    collection: 'media',
    data: {
      alt: 'Profile picture',
    },
    filePath: `${__dirname}/media/headshot-1.png`,
  })

  const designDesignFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design Design app screenshot',
    },
    filePath: `${__dirname}/media/design-design-1.png`,
  })

  const designDesignMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design Design app marketing image one',
    },
    filePath: `${__dirname}/media/design-design-2.png`,
  })

  const designDesignMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design Design app marketing image two',
    },
    filePath: `${__dirname}/media/design-design-3.png`,
  })

  const designDesignMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design Design app marketing image three',
    },
    filePath: `${__dirname}/media/design-design-4.png`,
  })

  const outsideAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Outside app screenshot',
    },
    filePath: `${__dirname}/media/outside-app-1.png`,
  })

  const outsideAppMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Outside marketing image one',
    },
    filePath: `${__dirname}/media/outside-app-2.png`,
  })

  const outsideAppMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Outside marketing image two',
    },
    filePath: `${__dirname}/media/outside-app-3.png`,
  })

  const outsideAppMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'Outside marketing image three',
    },
    filePath: `${__dirname}/media/outside-app-4.png`,
  })

  const outsideAppMarketingImageFour = await payload.create({
    collection: 'media',
    data: {
      alt: 'Outside marketing image four',
    },
    filePath: `${__dirname}/media/outside-app-5.png`,
  })

  const designAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app screenshot',
    },
    filePath: `${__dirname}/media/design-app-1.png`,
  })

  const designAppMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image one',
    },
    filePath: `${__dirname}/media/design-app-2.png`,
  })

  const designAppMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image two',
    },
    filePath: `${__dirname}/media/design-app-3.png`,
  })

  const designAppMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image three',
    },
    filePath: `${__dirname}/media/design-app-4.png`,
  })

  const designAppMarketingImageFour = await payload.create({
    collection: 'media',
    data: {
      alt: 'Design app marketing image four',
    },
    filePath: `${__dirname}/media/design-app-5.png`,
  })

  const artAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Art app screenshot',
    },
    filePath: `${__dirname}/media/art-app-1.png`,
  })

  const artAppMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Art app marketing image one',
    },
    filePath: `${__dirname}/media/art-app-2.png`,
  })

  const artAppMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Art app marketing image two',
    },
    filePath: `${__dirname}/media/art-app-3.png`,
  })

  const artAppMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'Art app marketing image three',
    },
    filePath: `${__dirname}/media/art-app-4.png`,
  })

  return {
    profileImageDoc,
    designDesignFeaturedScreenshot,
    designDesignMarketingImageOne,
    designDesignMarketingImageTwo,
    designDesignMarketingImageThree,
    outsideAppFeaturedScreenshot,
    outsideAppMarketingImageOne,
    outsideAppMarketingImageTwo,
    outsideAppMarketingImageThree,
    outsideAppMarketingImageFour,
    designAppFeaturedScreenshot,
    designAppMarketingImageOne,
    designAppMarketingImageTwo,
    designAppMarketingImageThree,
    designAppMarketingImageFour,
    artAppFeaturedScreenshot,
    artAppMarketingImageOne,
    artAppMarketingImageTwo,
    artAppMarketingImageThree,
  }
}
