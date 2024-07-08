import { Appearance } from '@/payload-types'

import { palettes } from '@/utilities/palettes'

export const AppearanceStyles = ({ appearance }: { appearance: Appearance }) => {
  const processPaletteVariable = (
    name: keyof NonNullable<
      NonNullable<NonNullable<NonNullable<Appearance['palettes']>['light']>>['custom']
    >,
    cssKey: string,
    mode: 'light' | 'dark',
  ) => {
    const variable = appearance.palettes?.[mode]
    if (variable?.type === 'preset') {
      const palette = palettes.find(p => p.name === variable.preset)
      if (!palette) return ''

      const basePalette = palettes.find(p => p.name === palette.extends)
      const resolvedPalette = Object.assign({}, basePalette?.palette, palette.palette)

      return `--cms-${cssKey}-${mode}: ${resolvedPalette[name]};`
    }

    const defaultLight = palettes.find(p => p.name === 'defaultLight')?.palette
    const resolvedPalette = Object.assign({}, defaultLight, appearance.palettes?.[mode]?.custom)
    const value = resolvedPalette[name]
    if (!value) return ''

    return `--cms-${cssKey}-${mode}: ${value};`
  }

  const processVariable = (
    variable: keyof NonNullable<Appearance['general']>,
    cssKey: string,
    mode?: 'light' | 'dark',
  ) => {
    const value = appearance.general?.[variable]
    if (value === undefined) return ''

    let key = `--cms-${cssKey}`
    if (mode) {
      key += `-${mode}`
    }

    return `${cssKey}: ${value};`
  }

  return (
    <style>
      {`
     :root {
      ${processVariable('borderRadius', 'radius')}
      ${(['dark', 'light'] as const)
        .map(
          mode => `
      ${processPaletteVariable('background', 'background', mode)}
      ${processPaletteVariable('foreground', 'foreground', mode)} 
      ${processPaletteVariable('muted', 'muted', mode)}
      ${processPaletteVariable('mutedForeground', 'muted-foreground', mode)}
      ${processPaletteVariable('popover', 'popover', mode)}
      ${processPaletteVariable('popoverForeground', 'popover-foreground', mode)}
      ${processPaletteVariable('card', 'card', mode)}
      ${processPaletteVariable('cardForeground', 'card-foreground', mode)}
      ${processPaletteVariable('border', 'border', mode)}
      ${processPaletteVariable('inputBorder', 'input', mode)}
      ${processPaletteVariable('primary', 'primary', mode)}
      ${processPaletteVariable('primaryForeground', 'primary-foreground', mode)}
      ${processPaletteVariable('secondary', 'secondary', mode)}
      ${processPaletteVariable('secondaryForeground', 'secondary-foreground', mode)}
      ${processPaletteVariable('accent', 'accent', mode)}
      ${processPaletteVariable('accentForeground', 'accent-foreground', mode)}
      ${processPaletteVariable('destructive', 'destructive', mode)}
      ${processPaletteVariable('destructiveForeground', 'destructive-foreground', mode)}
      ${processPaletteVariable('ring', 'ring', mode)}
      ${processPaletteVariable('box', 'box', mode)}
      `,
        )
        .join('')}  
  `}
    </style>
  )
}
