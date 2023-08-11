import type { Block } from 'payload/types'

import { ProjectUIField } from './fields/ProjectUI/Field'

export const ProjectHero: Block = {
  slug: 'projectHero',
  labels: {
    singular: 'Project Hero',
    plural: 'Project Heros',
  },
  fields: [
    {
      name: 'projectUI',
      type: 'ui',
      admin: {
        components: {
          Field: ProjectUIField,
        },
      },
    },
  ],
}

// import type { Block } from 'payload/types'

// export const ProjectHero: Block = {
//   slug: 'projectHero',
//   labels: {
//     singular: 'Project Hero',
//     plural: 'Project Heros',
//   },
//   fields: [
//     {
//       type: 'row',
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           admin: {
//             width: '50%',
//           },
//         },
//         {
//           name: 'role',
//           type: 'text',
//           required: true,
//           admin: {
//             width: '50%',
//           },
//         },
//         {
//           name: 'startDate',
//           type: 'date',
//           admin: {
//             width: '50%',
//           },
//         },
//         {
//           name: 'endDate',
//           type: 'date',
//           admin: {
//             width: '50%',
//           },
//         },
//       ],
//     },
//     {
//       name: 'description',
//       type: 'richText',
//       required: true,
//     },
//     {
//       name: 'technologiesUsed',
//       type: 'relationship',
//       relationTo: 'technologies',
//       hasMany: true,
//       required: true,
//     },
//     {
//       name: 'featuredImage',
//       type: 'upload',
//       relationTo: 'media',
//     },
//   ],
// }
