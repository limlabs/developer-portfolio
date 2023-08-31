import type { Payload } from 'payload'

import { seedMedia } from './media'

const mockDescription = [
  {
    children: [
      {
        text: 'As Lead UI/UX Designer for the "Outside App," I spearheaded the creation of an innovative mobile platform connecting users with nature. Conducting extensive research, I ideated with the team to design user-friendly interfaces and seamless navigation. Crafting a vibrant visual identity, we aimed to evoke adventure and user engagement.',
      },
    ],
  },
  {
    children: [
      {
        text: "Iterative testing and refinement ensured a smooth user experience. The app's successful launch garnered a thriving community of outdoor enthusiasts, facilitating discovery of new trails and sustainable outdoor events. Witnessing the positive impact of reconnecting people with nature has been incredibly rewarding. As a UI/UX designer, I take pride in crafting meaningful digital experiences that inspire a love for the great outdoors.",
      },
    ],
  },
  {
    children: [
      {
        text: "To establish a strong brand presence, I developed the app's visual identity, creating a vibrant color scheme and selecting modern typography that resonated with our target audience. The objective was to evoke a sense of adventure and connection with nature, while also emphasizing the app's ease of use.",
      },
    ],
  },
  {
    children: [
      {
        text: "Working closely with the usability testing team, I conducted multiple rounds of user testing and gathered valuable feedback. This iterative process allowed us to fine-tune the app's design and address any pain points experienced by the testers. As a result, we optimized the app for a seamless and enjoyable user experience.",
      },
    ],
  },
]

const confirmationMessage = [
  {
    children: [
      {
        text: "Thank you! I'll be reaching out to you shortly.",
      },
    ],
  },
]

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
    profileImageDoc,
    designDesignFeaturedScreenshot,
    outsideAppFeaturedScreenshot,
    designAppFeaturedScreenshot,
    designAppMarketingImageOne,
    designAppMarketingImageTwo,
    designAppMarketingImageThree,
    artAppFeaturedScreenshot,
    genericMarketingImageOne,
    genericMarketingImageTwo,
    genericMarketingImageThree,
    genericMarketingImageFour,
  } = await seedMedia()

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

  const contactForm = await payload.create({
    collection: 'forms',
    data: {
      title: 'Contact Form',
      fields: [
        {
          name: 'firstname',
          label: 'First Name',
          width: 50,
          required: true,
          blockType: 'text',
        },
        {
          name: 'lastname',
          label: 'Last Name',
          width: 50,
          required: true,
          blockType: 'text',
        },
        {
          name: 'email',
          label: 'Email',
          width: 100,
          required: true,
          blockType: 'email',
        },
        {
          name: 'subject',
          label: 'Subject',
          width: 100,
          required: true,
          blockType: 'text',
        },
        {
          name: 'message',
          label: 'Message',
          width: 100,
          required: true,
          blockType: 'textarea',
        },
      ],
      submitButtonLabel: 'Submit',
      confirmationType: 'message',
      confirmationMessage: confirmationMessage,
    },
  })

  await payload.updateGlobal({
    slug: 'profile',
    data: {
      name: 'Samantha Smith',
      location: 'Portland, OR',
      title: 'UI/UX Designer',
      profileImage: profileImageDoc.id,
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

  const [designDesign, outsideApp, designApp, artApp] = await Promise.all([
    payload.create({
      collection: 'projects',
      data: {
        title: 'Design Design',
        description: mockDescription,
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
                richText: mockDescription,
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
        description: mockDescription,
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
                richText: mockDescription,
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
        description: mockDescription,
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
                richText: mockDescription,
                media: designAppMarketingImageOne.id,
              },
            ],
            blockType: 'mediaContent',
          },
          {
            mediaFields: [
              {
                size: 'oneThird',
                media: designAppMarketingImageTwo.id,
              },
              {
                size: 'twoThirds',
                media: designAppMarketingImageThree.id,
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
        description: mockDescription,
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
                richText: mockDescription,
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
