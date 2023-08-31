import type { Payload } from 'payload'

import { seedForms } from './forms'
import { seedMedia } from './media'
import {
  artAppMockDescription,
  artAppMockDetailedDescription,
  designAppMockDescription,
  designAppMockDetailedDescription,
  designDesignMockDescription,
  designDesignMockDetailedDescription,
  outsideAppMockDescription,
  outsideAppMockDetailedDescription,
} from './projectData'
import { seedTechnologies } from './technologies'

export const seed = async (payload: Payload): Promise<void> => {
  // create admin
  await payload.create({
    collection: 'users',
    data: {
      email: 'dev@payloadcms.com',
      password: 'test',
    },
  })

  const {
    profileImage,
    designDesignFeaturedScreenshot,
    outsideAppFeaturedScreenshot,
    designAppFeaturedScreenshot,
    artAppFeaturedScreenshot,
    genericMarketingImageOne,
    genericMarketingImageTwo,
    genericMarketingImageThree,
  } = await seedMedia()

  const { contactForm } = await seedForms()

  await payload.updateGlobal({
    slug: 'profile',
    data: {
      name: 'Samantha Smith',
      location: 'Portland, OR',
      title: 'UI/UX Designer',
      profileImage: profileImage.id,
      socialLinks: {
        github: 'https://github.com/payloadcms',
        linkedin: 'https://www.linkedin.com/company/payloadcms',
        twitter: 'https://twitter.com/payloadcms',
        email: 'info@payloadcms.com',
      },
      aboutMe: [
        {
          text: "Samantha Smith is a visionary artist with a passion for pushing boundaries. She crafts captivating visual stories that leave a lasting impact. Her work reflects a perfect blend of innovation and elegance, whether in logo designs that capture a brand's essence or breathtaking illustrations that transport you to distant realms.",
        },
      ],
      _status: 'published',
    },
  })

  const { webflowDoc, inVisionDoc, figmaDoc, illustratorDoc } = await seedTechnologies()

  const [designDesign, outsideApp, designApp, artApp] = await Promise.all([
    payload.create({
      collection: 'projects',
      data: {
        title: 'Design Design',
        description: designDesignMockDescription,
        role: ['uiUxDesigner'],
        startDate: new Date('2020-01-01'),
        endDate: new Date('2020-01-31'),
        technologiesUsed: [webflowDoc.id, inVisionDoc.id, figmaDoc.id, illustratorDoc.id],
        featuredImage: designDesignFeaturedScreenshot.id,
        layout: [
          {
            mediaContentFields: [
              {
                alignment: 'mediaContent',
                mediaSize: 'twoThirds',
                richText: designDesignMockDetailedDescription,
                media: genericMarketingImageOne.id,
              },
            ],
            blockType: 'mediaContent',
          },
          {
            mediaFields: [
              {
                size: 'oneThird',
                media: genericMarketingImageTwo.id,
              },
              {
                size: 'twoThirds',
                media: genericMarketingImageThree.id,
              },
            ],
            blockType: 'mediaBlock',
          },
        ],
        _status: 'published',
      },
    }),
    payload.create({
      collection: 'projects',
      data: {
        title: 'Outside App',
        description: outsideAppMockDescription,
        role: ['uiUxDesigner'],
        startDate: new Date('2023-02-01'),
        endDate: new Date('2023-02-28'),
        technologiesUsed: [webflowDoc.id, inVisionDoc.id, figmaDoc.id, illustratorDoc.id],
        featuredImage: outsideAppFeaturedScreenshot.id,
        layout: [
          {
            mediaContentFields: [
              {
                alignment: 'mediaContent',
                mediaSize: 'twoThirds',
                richText: outsideAppMockDetailedDescription,
                media: genericMarketingImageOne.id,
              },
            ],
            blockType: 'mediaContent',
          },
          {
            mediaFields: [
              {
                size: 'oneThird',
                media: genericMarketingImageTwo.id,
              },
              {
                size: 'twoThirds',
                media: genericMarketingImageThree.id,
              },
            ],
            blockType: 'mediaBlock',
          },
        ],
        _status: 'published',
      },
    }),
    payload.create({
      collection: 'projects',
      data: {
        title: 'Design App',
        description: designAppMockDescription,
        role: ['uiUxDesigner'],
        startDate: new Date('2021-03-01'),
        endDate: new Date('2021-03-31'),
        technologiesUsed: [webflowDoc.id, inVisionDoc.id, figmaDoc.id, illustratorDoc.id],
        featuredImage: designAppFeaturedScreenshot.id,
        layout: [
          {
            mediaContentFields: [
              {
                alignment: 'mediaContent',
                mediaSize: 'twoThirds',
                richText: designAppMockDetailedDescription,
                media: genericMarketingImageOne.id,
              },
            ],
            blockType: 'mediaContent',
          },
          {
            mediaFields: [
              {
                size: 'oneThird',
                media: genericMarketingImageTwo.id,
              },
              {
                size: 'twoThirds',
                media: genericMarketingImageThree.id,
              },
            ],
            blockType: 'mediaBlock',
          },
        ],
        _status: 'published',
      },
    }),
    payload.create({
      collection: 'projects',
      data: {
        title: 'Art App',
        description: artAppMockDescription,
        role: ['uiUxDesigner'],
        startDate: new Date('2021-04-01'),
        endDate: new Date('2021-04-30'),
        technologiesUsed: [webflowDoc.id, inVisionDoc.id, figmaDoc.id, illustratorDoc.id],
        featuredImage: artAppFeaturedScreenshot.id,
        layout: [
          {
            mediaContentFields: [
              {
                alignment: 'mediaContent',
                mediaSize: 'twoThirds',
                richText: artAppMockDetailedDescription,
                media: genericMarketingImageOne.id,
              },
            ],
            blockType: 'mediaContent',
          },
          {
            mediaFields: [
              {
                size: 'oneThird',
                media: genericMarketingImageTwo.id,
              },
              {
                size: 'twoThirds',
                media: genericMarketingImageThree.id,
              },
            ],
            blockType: 'mediaBlock',
          },
        ],
        _status: 'published',
      },
    }),
  ])

  await payload.create({
    collection: 'pages',
    data: {
      title: 'Profile Landing Page',
      layout: [
        {
          blockType: 'profile-cta',
        },
        {
          project: [designDesign.id, outsideApp.id, designApp.id, artApp.id],
          blockType: 'projectGrid',
        },
        {
          richText: [
            {
              children: [
                {
                  text: 'Contact',
                },
              ],
              type: 'h3',
            },
            {
              children: [
                {
                  text: 'For commissions and other inquiries, please use the form below.',
                },
              ],
            },
          ],
          form: contactForm.id,
          blockType: 'form',
        },
      ],
      _status: 'published',
    },
  })
}
