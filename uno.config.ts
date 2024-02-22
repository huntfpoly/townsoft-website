import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-2 rounded inline-block bg-primary cursor-pointer hover:bg-primary-700 text-white disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 transition-all'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['link', 'text-primary-500 hover:text-primary-700 transition-all'],
    ['menu-item', 'flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-500 transition-all'],
    ['footer-link', 'hover:text-gray-500 transition-all'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#1a6fff',
        100: '#e6f0ff',
        200: '#b3ceff',
        300: '#80abff',
        400: '#4d89ff',
        500: '#1a6fff',
        600: '#0052cc',
        700: '#004199',
        800: '#002b66',
        900: '#001433',
      },
    },
  },
})
