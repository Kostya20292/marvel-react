import ironMan from '../assets/iron-man.webp'

export const getCharacterImageUrl = (path: string, extension: string): string =>
  path.includes('wallpaperflare') ? ironMan : `${path}.${extension}`
