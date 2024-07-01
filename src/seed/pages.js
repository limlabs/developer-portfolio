export const seedPages = async (payload, forms, projects, media) => {
  await payload.create({
    collection: 'pages',
    data: {
      title: 'Profile Landing Page',
      slug: 'home',
      layout: [
        {
          blockType: 'profile-cta',
        },
        {
          project: Object.values(projects).map(project => project.id),
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
              type: 'h2',
            },
            {
              children: [
                {
                  text: 'For commissions and other inquiries, please use the form below.',
                },
              ],
            },
          ],
          form: forms.contactForm.id,
          blockType: 'form',
        },
      ],
      meta: {
        title: "Payload CMS - Next.js app router example portfolio ",
        description: "New example portfolio showcasing how you can use the updated Payload CMS with Next.js App router to get the benefits of react server components.",
        image: media.profileImage.id
      },
      _status: 'published',
    },
  })
}
