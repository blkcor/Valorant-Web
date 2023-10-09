import { defineConfig, presetWebFonts, presetIcons, presetUno, presetAttributify } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        space: 'Space Grotesk',
        news: 'Newsreader',
      },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        width: '1.5em',
        height: '1.5em',
      },
    }),
  ],
  shortcuts: [
    {
      'bg-base': 'bg-light-100 text-black dark:bg-dark-900 dark:text-white',
      'fg-base': 'text-neutral-500 dark:text-neutral-200',
      'fg-emphasis': 'text-dark dark:text-light',
      'hv-base': 'transition-colors duration-300 hover:fg-emphasis',
      'border-base': 'border-light-700 dark:border-dark-300',
      'text-emphasis': 'font-serif font-italic text-lg fg-emphasis',
      'border-emphasis': 'border-neutral-400 dark:border-light',
      'text-gradient': 'animate-pulse bg-gradient-to-r from-pink-500 via-green-500 to-violet-500 bg-clip-text',
      'text-wip': 'bg-gradient-to-r from-[#FFF6B7] to-[#F6416C] bg-clip-text',
      'confirm-btn': 'border-2 border-lime-300/80 rounded-2 px-4 py-1  fw-700 ring-lime-200/50 hover:ring-2',
      'cancel-btn': 'border-2 border-rose-300/90 rounded-2 px-4 py-1  fw-700 ring-rose-200/50 hover:ring-2',
      'auth-input':
        'bg-gray-400 dark:bg-gray-800 text-black dark:text-white placeholder-gray-200 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 rounded-md px-4 py-2',
    },
  ],
  transformers: [transformerDirectives()],
})
