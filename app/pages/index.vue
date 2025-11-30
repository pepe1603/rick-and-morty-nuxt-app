<script setup lang="ts">
const { getColorVariant } = useCustomColorVariants()

</script>

<template>
  <div class="space-y-12 text-center py-20">
    
    <h1 class="text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
      <span class="text-ocean-500 dark:text-ocean-300">R&M</span> 
      <span class="text-forest-600 dark:text-forest-400">Explorer</span>
    </h1>

    <p class="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
      Tu portal para explorar todos los personajes, episodios y ubicaciones del universo de Rick y Morty, construido con <span class="font-bold text-ocean-500">Nuxt 4</span>, <span class="font-bold text-ocean-500">Nuxt UI</span> y <span class="font-bold text-ocean-500">Tailwind CSS</span>.
    </p>

    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      
      <UButton
        to="/characters"
        size="xl"
        color="success"
        variant="solid"
        icon="i-lucide-user-star"
      >
        Ver Personajes
      </UButton>
      
      <UButton
        to="/episodes"
        size="xl"
        :ui="getColorVariant('ocean', 'outline')"
        variant="outline"
        icon="i-lucide-monitor-play"
      >
        Ver Episodios
      </UButton>
      
      <UButton
        to="/locations"
        size="xl"
        :ui="getColorVariant('terra', 'outline')"
        variant="outline"
        icon="i-lucide-globe"
      >
        Ver Ubicaciones
      </UButton>
      
    </div>

    <div class="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
      <h2 class="text-3xl font-bold text-sakura-600 dark:text-sakura-400 mb-8">Características de la App</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        
        <UCard class="bg-sakura-50 dark:bg-gray-800">
          <template #header>
            <UIcon name="i-lucide-palette" class="w-8 h-8 text-sakura-500" />
          </template>
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">Temas Personalizados</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Usando tus paletas **Sakura, Forest y Ocean**.</p>
        </UCard>
        
        <UCard class="bg-forest-50 dark:bg-gray-800">
          <template #header>
            <UIcon name="i-lucide-component" class="w-8 h-8 text-forest-500" />
          </template>
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">Componentes UI</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Integración nativa con **@nuxt/ui**.</p>
        </UCard>
        
        <UCard class="bg-ocean-50 dark:bg-gray-800">
          <template #header>
            <UIcon name="i-lucide-server" class="w-8 h-8 text-ocean-500" />
          </template>
          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">Server-Side Fetching</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Uso de Pinia y `$fetch` para rendimiento.</p>
        </UCard>
      </div>
    </div>
  </div>
</template>