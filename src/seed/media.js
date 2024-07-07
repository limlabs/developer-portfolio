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
    filePath: `./src/seed/media/generic-one.png`,
  })

  const genericMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: `./src/seed/media/generic-two.png`,
  })

  const genericMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'UI/UX Examples',
    },
    filePath: `./src/seed/media/generic-three.png`,
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

export async function getSeededMedia(payload) {
  const media = await payload.find({ collection: 'media' })
  if (media.docs.length === 0) {
    throw new Error('No media found during seed process')
  }

  const mediaFileMap = {
    genericMarketingImageOne: 'generic-one',
    genericMarketingImageTwo: 'generic-two',
    genericMarketingImageThree: 'generic-three',
    profileImage: 'headshot',
    designDesignFeaturedScreenshot: 'design-design-featured',
    outsideAppFeaturedScreenshot: 'outside-app-featured',
    designAppFeaturedScreenshot: 'design-app-featured',
    artAppFeaturedScreenshot: 'art-app-featured',
  }

  const seededMedia = Object.entries(mediaFileMap).reduce(
    (acc, [key, value]) => {
      acc[key] = media.docs.find(doc => doc.filename?.startsWith(value))
      return acc
    },
    {}
  )

  return seededMedia
}
