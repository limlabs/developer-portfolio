const getImagePath = (filename) => `${process.cwd()}/src/app/setup/data/images/${filename}.png`

export async function seedMedia(payload) {
  const profileImage = await payload.create({
    collection: 'media',
    data: {
      alt: 'Profile picture',
    },
    filePath: getImagePath('headshot'),
  })

  const designDesignFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: getImagePath('design-design-featured'),
  })

  const outsideAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: getImagePath('outside-app-featured'),
  })

  const designAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: getImagePath('design-app-featured'),
  })

  const artAppFeaturedScreenshot = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: getImagePath('art-app-featured'),
  })

  const genericMarketingImageOne = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: getImagePath('generic-one'),
  })

  const genericMarketingImageTwo = await payload.create({
    collection: 'media',
    data: {
      alt: 'Marketing Image for Pre-Launch',
    },
    filePath: getImagePath('generic-two'),
  })

  const genericMarketingImageThree = await payload.create({
    collection: 'media',
    data: {
      alt: 'UI/UX Examples',
    },
    filePath: getImagePath('generic-three'),
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
