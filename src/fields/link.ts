import type { Field, GroupField } from 'payload/types'

import deepMerge from '../utilities/deepMerge'

export const appearanceOptions = {
  default: {
    label: 'Default',
    value: 'default',
  },
  secondary: {
    label: 'Secondary Button',
    value: 'secondary',
  },
}

export type LinkAppearances = 'default' | 'secondary'

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false
  disableLabel?: boolean
  overrides?: Partial<GroupField>
}) => Field

const link: LinkType = ({ appearances, disableLabel = false, overrides = {} } = {}) => {
  let linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
      ...(overrides?.admin || {}),
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'url',
            label: 'Custom URL',
            type: 'text',
            required: true,
            admin: {
              width: '50%',
            },
          },
          {
            name: 'newTab',
            label: 'Open in new tab',
            type: 'checkbox',
            admin: {
              width: '50%',
              style: {
                alignSelf: 'flex-end',
              },
            },
          },
        ],
      },
    ],
  }

  if (!disableLabel) {
    linkResult.fields.push({
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
      admin: {
        width: '50%',
      },
    })
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [appearanceOptions.default, appearanceOptions.secondary]

    if (appearances) {
      appearanceOptionsToUse = appearances.map(appearance => appearanceOptions[appearance])
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      defaultValue: 'default',
      options: appearanceOptionsToUse,
      admin: {
        description: 'Choose how the link should be rendered.',
      },
    })
  }

  return deepMerge(linkResult, overrides)
}

export default link
