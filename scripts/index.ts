import fs from 'fs-extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/lig-light.json',
      getTheme({
        color: 'light',
        name: 'LiG Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/lig-dark.json',
      getTheme({
        color: 'dark',
        name: 'LiG Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/lig-dark-soft.json',
      getTheme({
        color: 'dark',
        name: 'LiG Dark Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/lig-light-soft.json',
      getTheme({
        color: 'light',
        name: 'LiG Light Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
