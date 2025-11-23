// tailwind.config.ts
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
    }
  ]
}
