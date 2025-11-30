// composables/useCustomColorVariants.ts
export const useCustomColorVariants = () => {
  const getColorVariant = (
    color: 'sakura' | 'forest' | 'ocean' | 'terra' | 'sky' | 'jade' | 'fire' | 'rose' | 'gray', 
    variant: 'solid' | 'soft' | 'outline' | 'ghost' | 'link' | 'subtle' = 'soft'
  ) => {
    const variants = {
      sakura: {
        solid: {
          base: `text-white bg-sakura-500 hover:bg-sakura-600 active:bg-sakura-600 
                 disabled:bg-sakura-500 aria-disabled:bg-sakura-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sakura-500 
                 dark:bg-sakura-600 dark:hover:bg-sakura-700 dark:active:bg-sakura-700
                 transition-colors`
        },
        soft: {
          base: `text-sakura-600 bg-sakura-100 hover:bg-sakura-200 active:bg-sakura-200 
                 focus:outline-none focus-visible:bg-sakura-200 
                 disabled:bg-sakura-100 aria-disabled:bg-sakura-100 
                 dark:text-sakura-400 dark:bg-sakura-950 dark:hover:bg-sakura-900 dark:active:bg-sakura-900
                 dark:disabled:bg-sakura-950 dark:aria-disabled:bg-sakura-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-sakura-500/50 text-sakura-600 
                 hover:bg-sakura-50 active:bg-sakura-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sakura-500 
                 dark:ring-sakura-400/50 dark:text-sakura-400 
                 dark:hover:bg-sakura-950 dark:active:bg-sakura-950
                 dark:focus-visible:ring-sakura-400
                 transition-colors`
        },
        ghost: {
          base: `text-sakura-600 hover:bg-sakura-100 active:bg-sakura-100 
                 focus:outline-none focus-visible:bg-sakura-100 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 dark:text-sakura-400 dark:hover:bg-sakura-950 dark:active:bg-sakura-950
                 dark:focus-visible:bg-sakura-950
                 transition-colors`
        },
        link: {
          base: `text-sakura-600 hover:text-sakura-700 active:text-sakura-700 
                 disabled:text-sakura-600 aria-disabled:text-sakura-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sakura-500
                 dark:text-sakura-400 dark:hover:text-sakura-300 dark:active:text-sakura-300
                 dark:disabled:text-sakura-400 dark:aria-disabled:text-sakura-400
                 dark:focus-visible:ring-sakura-400`
        },
        subtle: {
          base: `text-sakura-600 ring ring-inset ring-sakura-200 bg-sakura-50 
                 hover:bg-sakura-100 active:bg-sakura-100 
                 disabled:bg-sakura-50 aria-disabled:bg-sakura-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sakura-500 
                 dark:text-sakura-400 dark:ring-sakura-800 dark:bg-sakura-950/50
                 dark:hover:bg-sakura-900 dark:active:bg-sakura-900
                 dark:disabled:bg-sakura-950/50 dark:aria-disabled:bg-sakura-950/50
                 dark:focus-visible:ring-sakura-400
                 transition-colors`
        }
      },
      forest: {
        solid: {
          base: `text-white bg-forest-500 hover:bg-forest-600 active:bg-forest-600 
                 disabled:bg-forest-500 aria-disabled:bg-forest-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-500 
                 dark:bg-forest-600 dark:hover:bg-forest-700 dark:active:bg-forest-700
                 transition-colors`
        },
        soft: {
          base: `text-forest-600 bg-forest-100 hover:bg-forest-200 active:bg-forest-200 
                 focus:outline-none focus-visible:bg-forest-200 
                 disabled:bg-forest-100 aria-disabled:bg-forest-100 
                 dark:text-forest-400 dark:bg-forest-950 dark:hover:bg-forest-900 dark:active:bg-forest-900
                 dark:disabled:bg-forest-950 dark:aria-disabled:bg-forest-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-forest-500/50 text-forest-600 
                 hover:bg-forest-50 active:bg-forest-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 
                 dark:ring-forest-400/50 dark:text-forest-400 
                 dark:hover:bg-forest-950 dark:active:bg-forest-950
                 dark:focus-visible:ring-forest-400
                 transition-colors`
        },
        ghost: {
          base: `text-forest-600 hover:bg-forest-100 active:bg-forest-100 
                 focus:outline-none focus-visible:bg-forest-100 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 dark:text-forest-400 dark:hover:bg-forest-950 dark:active:bg-forest-950
                 dark:focus-visible:bg-forest-950
                 transition-colors`
        },
        link: {
          base: `text-forest-600 hover:text-forest-700 active:text-forest-700 
                 disabled:text-forest-600 aria-disabled:text-forest-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-forest-500
                 dark:text-forest-400 dark:hover:text-forest-300 dark:active:text-forest-300
                 dark:disabled:text-forest-400 dark:aria-disabled:text-forest-400
                 dark:focus-visible:ring-forest-400`
        },
        subtle: {
          base: `text-forest-600 ring ring-inset ring-forest-200 bg-forest-50 
                 hover:bg-forest-100 active:bg-forest-100 
                 disabled:bg-forest-50 aria-disabled:bg-forest-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 
                 dark:text-forest-400 dark:ring-forest-800 dark:bg-forest-950/50
                 dark:hover:bg-forest-900 dark:active:bg-forest-900
                 dark:disabled:bg-forest-950/50 dark:aria-disabled:bg-forest-950/50
                 dark:focus-visible:ring-forest-400
                 transition-colors`
        }
      },
      ocean: {
        solid: {
          base: `text-white bg-ocean-500 hover:bg-ocean-600 active:bg-ocean-600 
                 disabled:bg-ocean-500 aria-disabled:bg-ocean-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ocean-500 
                 dark:bg-ocean-600 dark:hover:bg-ocean-700 dark:active:bg-ocean-700
                 transition-colors`
        },
        soft: {
          base: `text-ocean-600 bg-ocean-100 hover:bg-ocean-200 active:bg-ocean-200 
                 focus:outline-none focus-visible:bg-ocean-200 
                 disabled:bg-ocean-100 aria-disabled:bg-ocean-100 
                 dark:text-ocean-400 dark:bg-ocean-950 dark:hover:bg-ocean-900 dark:active:bg-ocean-900
                 dark:disabled:bg-ocean-950 dark:aria-disabled:bg-ocean-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-ocean-500/50 text-ocean-600 
                 hover:bg-ocean-50 active:bg-ocean-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 
                 dark:ring-ocean-400/50 dark:text-ocean-400 
                 dark:hover:bg-ocean-950 dark:active:bg-ocean-950
                 dark:focus-visible:ring-ocean-400
                 transition-colors`
        },
        ghost: {
          base: `text-ocean-600 hover:bg-ocean-100 active:bg-ocean-100 
                 focus:outline-none focus-visible:bg-ocean-100 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 dark:text-ocean-400 dark:hover:bg-ocean-950 dark:active:bg-ocean-950
                 dark:focus-visible:bg-ocean-950
                 transition-colors`
        },
        link: {
          base: `text-ocean-600 hover:text-ocean-700 active:text-ocean-700 
                 disabled:text-ocean-600 aria-disabled:text-ocean-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ocean-500
                 dark:text-ocean-400 dark:hover:text-ocean-300 dark:active:text-ocean-300
                 dark:disabled:text-ocean-400 dark:aria-disabled:text-ocean-400
                 dark:focus-visible:ring-ocean-400`
        },
        subtle: {
          base: `text-ocean-600 ring ring-inset ring-ocean-200 bg-ocean-50 
                 hover:bg-ocean-100 active:bg-ocean-100 
                 disabled:bg-ocean-50 aria-disabled:bg-ocean-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 
                 dark:text-ocean-400 dark:ring-ocean-800 dark:bg-ocean-950/50
                 dark:hover:bg-ocean-900 dark:active:bg-ocean-900
                 dark:disabled:bg-ocean-950/50 dark:aria-disabled:bg-ocean-950/50
                 dark:focus-visible:ring-ocean-400
                 transition-colors`
        }
      },
      // Variante Terra (Basada en Gray)
      terra: {
        solid: {
          base: `text-white bg-terra-500 hover:bg-terra-600 active:bg-terra-600 
                 disabled:bg-terra-500 aria-disabled:bg-terra-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terra-500 
                 dark:bg-terra-600 dark:hover:bg-terra-700 dark:active:bg-terra-700
                 transition-colors`
        },
        soft: {
          base: `text-terra-600 bg-terra-100 hover:bg-terra-200 active:bg-terra-200 
                 focus:outline-none focus-visible:bg-terra-200 
                 disabled:bg-terra-100 aria-disabled:bg-terra-100 
                 dark:text-terra-400 dark:bg-terra-950 dark:hover:bg-terra-900 dark:active:bg-terra-900
                 dark:disabled:bg-terra-950 dark:aria-disabled:bg-terra-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-terra-500/50 text-terra-600 
                 hover:bg-terra-50 active:bg-terra-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 
                 dark:ring-terra-400/50 dark:text-terra-400 
                 dark:hover:bg-terra-950 dark:active:bg-terra-950
                 dark:focus-visible:ring-terra-400
                 transition-colors`
        },
        ghost: {
          base: `text-terra-600 hover:bg-terra-100 active:bg-terra-100 
                 focus:outline-none focus-visible:bg-terra-100 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 dark:text-terra-400 dark:hover:bg-terra-950 dark:active:bg-terra-950
                 dark:focus-visible:bg-terra-950
                 transition-colors`
        },
        link: {
          base: `text-terra-600 hover:text-terra-700 active:text-terra-700 
                 disabled:text-terra-600 aria-disabled:text-terra-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-terra-500
                 dark:text-terra-400 dark:hover:text-terra-300 dark:active:text-terra-300
                 dark:disabled:text-terra-400 dark:aria-disabled:text-terra-400
                 dark:focus-visible:ring-terra-400`
        },
        subtle: {
          base: `text-terra-600 ring ring-inset ring-terra-200 bg-terra-50 
                 hover:bg-terra-100 active:bg-terra-100 
                 disabled:bg-terra-50 aria-disabled:bg-terra-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-terra-500 
                 dark:text-terra-400 dark:ring-terra-800 dark:bg-terra-950/50
                 dark:hover:bg-terra-900 dark:active:bg-terra-900
                 dark:disabled:bg-terra-950/50 dark:aria-disabled:bg-terra-950/50
                 dark:focus-visible:ring-terra-400
                 transition-colors`
        }
      },

      // Variante Sky (Basada en Indigo)
      sky: {
        solid: {
          base: `text-white bg-sky-500 hover:bg-sky-600 active:bg-sky-600 
                 disabled:bg-sky-500 aria-disabled:bg-sky-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 
                 dark:bg-sky-600 dark:hover:bg-sky-700 dark:active:bg-sky-700
                 transition-colors`
        },
        soft: {
          base: `text-sky-600 bg-sky-100 hover:bg-sky-200 active:bg-sky-200 
                 focus:outline-none focus-visible:bg-sky-200 
                 disabled:bg-sky-100 aria-disabled:bg-sky-100 
                 dark:text-sky-400 dark:bg-sky-950 dark:hover:bg-sky-900 dark:active:bg-sky-900
                 dark:disabled:bg-sky-950 dark:aria-disabled:bg-sky-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-sky-500/50 text-sky-600 
                 hover:bg-sky-50 active:bg-sky-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 
                 dark:ring-sky-400/50 dark:text-sky-400 
                 dark:hover:bg-sky-950 dark:active:bg-sky-950
                 dark:focus-visible:ring-sky-400
                 transition-colors`
        },
        ghost: {
          base: `text-sky-600 hover:bg-sky-100 active:bg-sky-100 
                 focus:outline-none focus-visible:bg-sky-100 
                 disabled:bg-transparent aria-disabled:bg-sky-100 
                 dark:text-sky-400 dark:hover:bg-sky-950 dark:active:bg-sky-950
                 dark:focus-visible:bg-sky-950
                 transition-colors`
        },
        link: {
          base: `text-sky-600 hover:text-sky-700 active:text-sky-700 
                 disabled:text-sky-600 aria-disabled:text-sky-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-500
                 dark:text-sky-400 dark:hover:text-sky-300 dark:active:text-sky-300
                 dark:disabled:text-sky-400 dark:aria-disabled:text-sky-400
                 dark:focus-visible:ring-sky-400`
        },
        subtle: {
          base: `text-sky-600 ring ring-inset ring-sky-200 bg-sky-50 
                 hover:bg-sky-100 active:bg-sky-100 
                 disabled:bg-sky-50 aria-disabled:bg-sky-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 
                 dark:text-sky-400 dark:ring-sky-800 dark:bg-sky-950/50
                 dark:hover:bg-sky-900 dark:active:bg-sky-900
                 dark:disabled:bg-sky-950/50 dark:aria-disabled:bg-sky-950/50
                 dark:focus-visible:ring-sky-400
                 transition-colors`
        }
      },

      // Variante Jade (Basada en Emerald)
      jade: {
        solid: {
          base: `text-white bg-jade-500 hover:bg-jade-600 active:bg-jade-600 
                 disabled:bg-jade-500 aria-disabled:bg-jade-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-500 
                 dark:bg-jade-600 dark:hover:bg-jade-700 dark:active:bg-jade-700
                 transition-colors`
        },
        soft: {
          base: `text-jade-600 bg-jade-100 hover:bg-jade-200 active:bg-jade-200 
                 focus:outline-none focus-visible:bg-jade-200 
                 disabled:bg-jade-100 aria-disabled:bg-jade-100 
                 dark:text-jade-400 dark:bg-jade-950 dark:hover:bg-jade-900 dark:active:bg-jade-900
                 dark:disabled:bg-jade-950 dark:aria-disabled:bg-jade-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-jade-500/50 text-jade-600 
                 hover:bg-jade-50 active:bg-jade-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-jade-500 
                 dark:ring-jade-400/50 dark:text-jade-400 
                 dark:hover:bg-jade-950 dark:active:bg-jade-950
                 dark:focus-visible:ring-jade-400
                 transition-colors`
        },
        ghost: {
          base: `text-jade-600 hover:bg-jade-100 active:bg-jade-100 
                 focus:outline-none focus-visible:bg-jade-100 
                 disabled:bg-transparent aria-disabled:bg-jade-100 
                 dark:text-jade-400 dark:hover:bg-jade-950 dark:active:bg-jade-950
                 dark:focus-visible:bg-jade-950
                 transition-colors`
        },
        link: {
          base: `text-jade-600 hover:text-jade-700 active:text-jade-700 
                 disabled:text-jade-600 aria-disabled:text-jade-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-jade-500
                 dark:text-jade-400 dark:hover:text-jade-300 dark:active:text-jade-300
                 dark:disabled:text-jade-400 dark:aria-disabled:text-jade-400
                 dark:focus-visible:ring-jade-400`
        },
        subtle: {
          base: `text-jade-600 ring ring-inset ring-jade-200 bg-jade-50 
                 hover:bg-jade-100 active:bg-jade-100 
                 disabled:bg-jade-50 aria-disabled:bg-jade-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-jade-500 
                 dark:text-jade-400 dark:ring-jade-800 dark:bg-jade-950/50
                 dark:hover:bg-jade-900 dark:active:bg-jade-900
                 dark:disabled:bg-jade-950/50 dark:aria-disabled:bg-jade-950/50
                 dark:focus-visible:ring-jade-400
                 transition-colors`
        }
      },

      // Variante Fire (Basada en Orange)
      fire: {
        solid: {
          base: `text-white bg-fire-500 hover:bg-fire-600 active:bg-fire-600 
                 disabled:bg-fire-500 aria-disabled:bg-fire-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fire-500 
                 dark:bg-fire-600 dark:hover:bg-fire-700 dark:active:bg-fire-700
                 transition-colors`
        },
        soft: {
          base: `text-fire-600 bg-fire-100 hover:bg-fire-200 active:bg-fire-200 
                 focus:outline-none focus-visible:bg-fire-200 
                 disabled:bg-fire-100 aria-disabled:bg-fire-100 
                 dark:text-fire-400 dark:bg-fire-950 dark:hover:bg-fire-900 dark:active:bg-fire-900
                 dark:disabled:bg-fire-950 dark:aria-disabled:bg-fire-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-fire-500/50 text-fire-600 
                 hover:bg-fire-50 active:bg-fire-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire-500 
                 dark:ring-fire-400/50 dark:text-fire-400 
                 dark:hover:bg-fire-950 dark:active:bg-fire-950
                 dark:focus-visible:ring-fire-400
                 transition-colors`
        },
        ghost: {
          base: `text-fire-600 hover:bg-fire-100 active:bg-fire-100 
                 focus:outline-none focus-visible:bg-fire-100 
                 disabled:bg-transparent aria-disabled:bg-fire-100 
                 dark:text-fire-400 dark:hover:bg-fire-950 dark:active:bg-fire-950
                 dark:focus-visible:bg-fire-950
                 transition-colors`
        },
        link: {
          base: `text-fire-600 hover:text-fire-700 active:text-fire-700 
                 disabled:text-fire-600 aria-disabled:text-fire-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fire-500
                 dark:text-fire-400 dark:hover:text-fire-300 dark:active:text-fire-300
                 dark:disabled:text-fire-400 dark:aria-disabled:text-fire-400
                 dark:focus-visible:ring-fire-400`
        },
        subtle: {
          base: `text-fire-600 ring ring-inset ring-fire-200 bg-fire-50 
                 hover:bg-fire-100 active:bg-fire-100 
                 disabled:bg-fire-50 aria-disabled:bg-fire-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-fire-500 
                 dark:text-fire-400 dark:ring-fire-800 dark:bg-fire-950/50
                 dark:hover:bg-fire-900 dark:active:bg-fire-900
                 dark:disabled:bg-fire-950/50 dark:aria-disabled:bg-fire-950/50
                 dark:focus-visible:ring-fire-400
                 transition-colors`
        }
      },

      // Variante Rose (Basada en Pink)
      rose: {
        solid: {
          base: `text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-600 
                 disabled:bg-rose-500 aria-disabled:bg-rose-500 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 
                 dark:bg-rose-600 dark:hover:bg-rose-700 dark:active:bg-rose-700
                 transition-colors`
        },
        soft: {
          base: `text-rose-600 bg-rose-100 hover:bg-rose-200 active:bg-rose-200 
                 focus:outline-none focus-visible:bg-rose-200 
                 disabled:bg-rose-100 aria-disabled:bg-rose-100 
                 dark:text-rose-400 dark:bg-rose-950 dark:hover:bg-rose-900 dark:active:bg-rose-900
                 dark:disabled:bg-rose-950 dark:aria-disabled:bg-rose-950
                 transition-colors`
        },
        outline: {
          base: `ring ring-inset ring-rose-500/50 text-rose-600 
                 hover:bg-rose-50 active:bg-rose-50 
                 disabled:bg-transparent aria-disabled:bg-transparent 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 
                 dark:ring-rose-400/50 dark:text-rose-400 
                 dark:hover:bg-rose-950 dark:active:bg-rose-950
                 dark:focus-visible:ring-rose-400
                 transition-colors`
        },
        ghost: {
          base: `text-rose-600 hover:bg-rose-100 active:bg-rose-100 
                 focus:outline-none focus-visible:bg-rose-100 
                 disabled:bg-transparent aria-disabled:bg-rose-100 
                 dark:text-rose-400 dark:hover:bg-rose-950 dark:active:bg-rose-950
                 dark:focus-visible:bg-rose-950
                 transition-colors`
        },
        link: {
          base: `text-rose-600 hover:text-rose-700 active:text-rose-700 
                 disabled:text-rose-600 aria-disabled:text-rose-600 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-rose-500
                 dark:text-rose-400 dark:hover:text-rose-300 dark:active:text-rose-300
                 dark:disabled:text-rose-400 dark:aria-disabled:text-rose-400
                 dark:focus-visible:ring-rose-400`
        },
        subtle: {
          base: `text-rose-600 ring ring-inset ring-rose-200 bg-rose-50 
                 hover:bg-rose-100 active:bg-rose-100 
                 disabled:bg-rose-50 aria-disabled:bg-rose-50 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 
                 dark:text-rose-400 dark:ring-rose-800 dark:bg-rose-950/50
                 dark:hover:bg-rose-900 dark:active:bg-rose-900
                 dark:disabled:bg-rose-950/50 dark:aria-disabled:bg-rose-950/50
                 dark:focus-visible:ring-rose-400
                 transition-colors`
        }
      }

      
    }

    // Si el color no está en tus variantes custom, devuelve una configuración básica
    // para que Nuxt UI use su color por defecto 'gray'.
    if (color === 'gray') {
        // El UBadge/UCard espera un objeto de clases o un objeto de configuración UI.
        // Como el badge necesita una configuración de UI estándar para el color 'gray',
        // que no está en tu mapa custom, lo mejor es devolver un objeto con clases básicas
        // para que no rompa el tipado, o usar el componente por defecto.

        // Dado que solo necesitas solucionar el error de TypeScript y 'gray' ya es un color
        // por defecto de Tailwind/Nuxt UI, puedes hacer lo siguiente:
        return {
            base: '', // Clases vacías, Nuxt UI usará su configuración por defecto.
        }
    }

    return variants[color][variant]
  }

  return {
    getColorVariant
  }
}
