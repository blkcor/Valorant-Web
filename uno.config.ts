import { defineConfig,presetAttributify, presetUno  } from 'unocss';
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets:[
    presetAttributify({
    
    }),
    presetUno(),
    presetIcons()
  ]
})
