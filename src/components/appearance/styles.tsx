import { Appearance } from '@/payload-types'
import { snakeCase } from '@/utilities/casing'
import { palettes } from '@/utilities/palettes'

export const AppearanceStyles = ({ appearance }: { appearance: Appearance }) => {
  const processPaletteVariable = (
    name: keyof NonNullable<
      NonNullable<NonNullable<NonNullable<Appearance['palettes']>['light']>>['custom']
    >,
    mode: 'light' | 'dark',
  ) => {
    const variable = appearance.palettes?.[mode]
    const cssKey = snakeCase(name)
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
      ${processPaletteVariable('background', mode)}
      ${processPaletteVariable('foreground', mode)} 
      ${processPaletteVariable('muted', mode)}
      ${processPaletteVariable('mutedForeground', mode)}
      ${processPaletteVariable('popover', mode)}
      ${processPaletteVariable('popoverForeground', mode)}
      ${processPaletteVariable('card', mode)}
      ${processPaletteVariable('cardForeground', mode)}
      ${processPaletteVariable('border', mode)}
      ${processPaletteVariable('inputBorder', mode)}
      ${processPaletteVariable('primary', mode)}
      ${processPaletteVariable('primaryForeground', mode)}
      ${processPaletteVariable('secondary', mode)}
      ${processPaletteVariable('secondaryForeground', mode)}
      ${processPaletteVariable('accent', mode)}
      ${processPaletteVariable('accentForeground', mode)}
      ${processPaletteVariable('destructive', mode)}
      ${processPaletteVariable('destructiveForeground', mode)}
      ${processPaletteVariable('ring', mode)}
      ${processPaletteVariable('box', mode)}
      `,
        )
        .join('')}  
  `}
    </style>
  )
}
