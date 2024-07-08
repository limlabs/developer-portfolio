import { Field, GlobalConfig } from 'payload'

const ColorPaletteField = (name: string): Field => ({
  name,
  type: 'group',
  fields: [
    {
      name: 'background',
      type: 'text',
      defaultValue: '20 30% 20%',
    },
    {
      name: 'foreground',
      type: 'text',
      defaultValue: '30 80% 80%',
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
    {
      name: 'primary',
      type: 'text',
      defaultValue: '200 80% 80%',
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
  ],
})

export const Appearance: GlobalConfig = {
  slug: 'appearance',
  fields: [
    {
      name: 'general',
      type: 'group',
      fields: [
        {
          name: 'borderRadius',
          type: 'text',
        },
        {
          name: 'enableBackdropAnimation',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'palette',
      type: 'group',
      fields: [ColorPaletteField('dark'), ColorPaletteField('light')],
    },
  ],
}
