export const seedTechnologies = async payload => {
  const [webflowDoc, inVisionDoc, figmaDoc, illustratorDoc] = await Promise.all([
    payload.create({
      collection: "technologies",
      data: {
        name: "Webflow",
      },
    }),
    payload.create({
      collection: "technologies",
      data: {
        name: "InVision",
      },
    }),
    payload.create({
      collection: "technologies",
      data: {
        name: "Figma",
      },
    }),
    payload.create({
      collection: "technologies",
      data: {
        name: "Illustrator",
      },
    }),
  ])

  return {
    webflowDoc,
    inVisionDoc,
    figmaDoc,
    illustratorDoc,
  }
}

export async function getSeededTechnologies(payload) {
  const technologies = await payload.find({
    collection: "technologies",
  })

  const technologiesMap = {
    Webflow: "webflowDoc",
    InVision: "inVisionDoc",
    Figma: "figmaDoc",
    Illustrator: "illustratorDoc",
  }

  const seededTechnologies = technologies.docs.reduce((acc, technology) => {
    const key = technologiesMap[technology.name]
    if (key) {
      acc[key] = technology
    }
    return acc
  }, {})

  return seededTechnologies
}
