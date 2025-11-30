// app/app.config.ts
export default defineAppConfig({
  ui: {
    // 1. Opcional: Define los colores predefinidos si los cambias.
    //    Aquí puedes omitir tus colores personalizados (sakura, fire, etc.)
    //    porque el mapeo en `theme.colors` es suficiente para Nuxt UI.
    colors: {
        // Dejamos solo los que tienen override o los predefinidos si los usas.
        primary: 'indigo', // Esto solo se usa si quisieras usar UButton color="primary"
        secondary: 'terra'
        
        // Si no usas los colores predefinidos, puedes borrar esta sección.
    },

    // 2. Mapeo de Colores de Tema (¡CRUCIAL!)
    theme: {
      colors: {
        terra: 'terra',
        fire: 'fire',
        jade: 'jade',
        rose: 'rose',
        sakura: 'sakura',
        forest: 'forest',
        ocean: 'ocean',
        // Opcional: Puedes mapear `gray` si quieres cambiar su paleta base
        // gray: 'terra' 
      }
    },
    
    
  }
})