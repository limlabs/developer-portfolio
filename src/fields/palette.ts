import { palettes } from '@/utilities/palettes'
import { Field } from 'payload'

export const paletteField = (name: string, defaultValue: string): Field => ({
  name,
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'radio',
      options: [
        { label: 'preset', value: 'preset' },
        { label: 'custom', value: 'custom' },
      ],
      defaultValue: 'preset',
    },
    {
      name: 'preset',
      type: 'select',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'preset',
      },
      options: palettes.map(palette => ({
        label: palette.name,
        value: palette.name,
      })),
      defaultValue,
    },
    {
      name: 'custom',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData.type === 'custom',
      },
      fields: [
        {
          name: 'background',
          type: 'text',
        },
        {
          name: 'foreground',
          type: 'text',
        },
        {
          name: 'muted',
          type: 'text',
        },
        {
          name: 'mutedForeground',
          type: 'text',
        },
        {
          name: 'border',
          type: 'text',
        },
        {
          name: 'inputBorder',
          type: 'text',
        },
        {
          name: 'primary',
          type: 'text',
        },
        {
          name: 'primaryForeground',
          type: 'text',
        },
        {
          name: 'secondary',
          type: 'text',
        },
        {
          name: 'secondaryForeground',
          type: 'text',
        },
        {
          name: 'accent',
          type: 'text',
        },
        {
          name: 'accentForeground',
          type: 'text',
        },
        {
          name: 'destructive',
          type: 'text',
        },
        {
          name: 'destructiveForeground',
          type: 'text',
        },
        {
          name: 'ring',
          type: 'text',
        },
        {
          name: 'box',
          type: 'text',
        },
        {
          name: 'popover',
          type: 'text',
        },
        {
          name: 'popoverForeground',
          type: 'text',
        },
        {
          name: 'card',
          type: 'text',
        },
        {
          name: 'cardForeground',
          type: 'text',
        },
      ],
    },
  ],
})
