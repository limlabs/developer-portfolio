import { paletteField } from '@/fields/palette'
import { GlobalConfig } from 'payload'

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
      name: 'palettes',
      type: 'group',
      fields: [paletteField('dark', 'defaultDark'), paletteField('light', 'defaultLight')],
    },
  ],
}
