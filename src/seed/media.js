
export async function seedMedia(payload) {
  const profileImage = await payload.create({
    collection: 'media',
    data: {
      alt: 'Profile picture',
    },
    filePath: `./src/seed/media/headshot.png`,
  })

  const designDesignFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/design-design-featured.png`,
  })

  const outsideAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/outside-app-featured.png`,
  })

  const designAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/design-app-featured.png`,
  })

  const artAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/art-app-featured.png`,
  })

  const genericMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/generic-1.png`,
  })

  const genericMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/generic-2.png`,
  })

  const genericMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'UI/UX Examples',
    },
    filePath: `./src/seed/media/generic-3.png`,
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
