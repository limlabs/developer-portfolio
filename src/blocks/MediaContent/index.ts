import type { Block, Field } from 'payload/types'

import link from '../../fields/link'

const mediaContentFields: Field[] = [
  {
    type: 'row',
    fields: [
      {
        name: 'alignment',
        type: 'select',
        defaultValue: 'contentMedia',
        options: [
          {
            label: 'Content + Media',
            value: 'contentMedia',
          },
          {
            label: 'Media + Content',
            value: 'mediaContent',
          },
        ],
        admin: {
          description: 'Choose how to align the content for this block.',
          width: '50%',
        },
      },
      {
        name: 'mediaSize',
        type: 'select',
        defaultValue: 'half',
        options: [
          {
            value: 'oneThird',
            label: 'One Third',
          },
          {
            value: 'half',
            label: 'Half',
          },
          {
            value: 'twoThirds',
            label: 'Two Thirds',
          },
        ],
        admin: {
          width: '50%',
        },
      },
    ],
  },
  {
    name: 'richText',
    type: 'richText',
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
  {
    name: 'media',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
]

export const MediaContent: Block = {
  slug: 'mediaContent',
  fields: [
    {
      name: 'mediaContentFields',
      type: 'array',
      fields: mediaContentFields,
    },
  ],
}
