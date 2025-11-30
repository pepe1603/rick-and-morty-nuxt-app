import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  safelist: [
    // Sakura
    {
      pattern: /(bg|text|border|ring)-sakura(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Forest
    {
      pattern: /(bg|text|border|ring)-forest(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Ocean
    {
      pattern: /(bg|text|border|ring)-ocean(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Terra (Nuevo)
    {
      pattern: /(bg|text|border|ring)-terra(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Sky (Nuevo)
    {
      pattern: /(bg|text|border|ring)-sky(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Jade (Nuevo)
    {
      pattern: /(bg|text|border|ring)-jade(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Fire (Nuevo)
    {
      pattern: /(bg|text|border|ring)-fire(-[0-9]+)?(\/[0-9]+)?/,
    },
    // Rose (Nuevo)
    {
      pattern: /(bg|text|border|ring)-rose(-[0-9]+)?(\/[0-9]+)?/,
    }
  ]
}