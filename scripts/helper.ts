import { colors, LiGThemes } from './colors'

export interface GetThemeOptions {
  color: 'light' | 'dark'
  name: string
  soft?: boolean
}

function toArray<T>(arr: T | T[]): T[] {
  if (Array.isArray(arr))
    return arr
  return [arr]
}

function getColors(style: 'light' | 'dark'): typeof colors {
  if (style === 'dark') {
    /* The array of light to dark colors are reversed to auto-generate dark theme */
    const darkColors: any = {}
    Object.entries(colors).forEach(([name, val]) => {
      if (name === 'black')
        darkColors.white = val

      else if (name === 'white')
        darkColors.black = val

      else
        darkColors[name] = [...toArray(val)].reverse()
    })
    return darkColors
  }
  else {
    return colors
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function createThemeHelpers({ color, soft = false }: GetThemeOptions) {
  const pick = (options: { light?: string, dark?: string }) => {
    return options[color]
  }

  // Get color from oQThemes
  const c = (key: keyof typeof LiGThemes, op = '') => {
    let obj = soft
      ? LiGThemes[`soft${capitalize(key)}` as keyof typeof LiGThemes] || LiGThemes[key]
      : LiGThemes[key]

    if (typeof obj === 'string')
      obj = [obj, obj]

    return pick({ light: obj[1] + op, dark: obj[0] + op })
  }

  // Get hl from oQThemes
  // const hl = (key: keyof typeof oQThemes) => {

  // }

  const colors = getColors(color)

  return {
    pick,
    colors,
    v: c,
  }
}
