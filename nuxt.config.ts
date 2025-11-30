// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/ui',
    '@pinia/nuxt',
  ],
  
  // 1. SOLUCIÓN: La configuración detallada de colorMode va aquí, en la raíz
  colorMode: {
    preference: 'system', // Detecta la preferencia del SO
    classSuffix: '' // IMPORTANTE: Asegura que la clase 'dark' se aplique sin sufijo
  },

  // 2. La sección 'ui' ahora solo contiene otras configuraciones del módulo UI
  ui: {
    // Si tienes otras configuraciones (ej: iconos, prefijo de componentes), irían aquí.
    // Dejamos esta sección aquí por si la necesitas más adelante, pero si no la usas,
    // puedes omitirla.
    // Aquí definimos el mapeo de colores para el módulo Nuxt UI

  },

  css: ['~/assets/css/main.css']
})