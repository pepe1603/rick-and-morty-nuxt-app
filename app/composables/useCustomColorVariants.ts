// composables/useCustomColorVariants.ts
export const useCustomColorVariants = () => {
  const getColorVariant = (
    color: 'sakura' | 'forest' | 'ocean', 
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
      }
    }

    return variants[color][variant]
  }

  return {
    getColorVariant
  }
}
