import payload from 'payload'

interface InitialTechnologies {
  webflowDoc: any
  inVisionDoc: any
  figmaDoc: any
  illustratorDoc: any
}

export const seedTechnologies = async (): Promise<InitialTechnologies> => {
  const [webflowDoc, inVisionDoc, figmaDoc, illustratorDoc] = await Promise.all([
    payload.create({
      collection: 'technologies',
      data: {
        name: 'Webflow',
      },
    }),
    payload.create({
      collection: 'technologies',
      data: {
        name: 'InVision',
      },
    }),
    payload.create({
      collection: 'technologies',
      data: {
        name: 'Figma',
      },
    }),
    payload.create({
      collection: 'technologies',
      data: {
        name: 'Illustrator',
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
