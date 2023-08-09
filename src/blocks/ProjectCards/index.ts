import type { Block } from 'payload/types'

export const ProjectCards: Block = {
  slug: 'projectCards',
  labels: {
    singular: 'Project Card',
    plural: 'Project Cards',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      fields: [
        {
          name: 'richText',
          type: 'richText',
        },
        {
          name: 'project',
          type: 'relationship',
          relationTo: 'projects',
          required: true,
        },
      ],
    },
  ],
}
