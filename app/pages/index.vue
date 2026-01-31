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
      Aplicación web desarrollada para explorar el universo de Rick and Morty a través de personajes,
      episodios y ubicaciones.
      Construida con una arquitectura moderna utilizando
      <span class="font-semibold text-ocean-500">Nuxt 4</span>,
      <span class="font-semibold text-ocean-500">Pinia</span>,
      <span class="font-semibold text-ocean-500">Nuxt UI</span>
      y
      <span class="font-semibold text-ocean-500">Tailwind CSS</span>,
      con foco en rendimiento, escalabilidad y una experiencia de usuario clara.
    </p>



    <div class="mt-10 flex flex-col sm:flex-row justify-center gap-4">
      
      <UButton
        to="/characters"
        size="xl"
        color="success"
        variant="solid"
        icon="i-lucide-user-star"
      >
        Explorar Personajes
      </UButton>

      
      <UButton
        to="/episodes"
        size="xl"
        :ui="getColorVariant('ocean', 'outline')"
        variant="outline"
        icon="i-lucide-monitor-play"
      >
        Explorar Episodios
      </UButton>

      
      <UButton
        to="/locations"
        size="xl"
        :ui="getColorVariant('terra', 'outline')"
        variant="outline"
        icon="i-lucide-globe"
      >
        Explorar Ubicaciones
      </UButton>

      
    </div>

    <div class="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
      <h2 class="text-3xl font-bold text-sakura-600 dark:text-sakura-400 mb-8">Características de la App</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        
        <UCard class="bg-sakura-50 dark:bg-gray-800">
          <template #header>
            <UIcon name="i-lucide-palette" class="w-8 h-8 text-sakura-500" />
          </template>

          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Sistema de Diseño Personalizado
          </p>

          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Implementación de un sistema de temas reutilizable con paletas
            <span class="font-medium">Sakura</span>, 
            <span class="font-medium">Forest</span> y 
            <span class="font-medium">Ocean</span>,
            integrado con Tailwind y Nuxt UI.
          </p>
        </UCard>

        
        <UCard class="bg-forest-50 dark:bg-gray-800">
          <template #header>
            <UIcon name="i-lucide-component" class="w-8 h-8 text-forest-500" />
          </template>

          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Arquitectura de Componentes
          </p>

          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Uso de componentes desacoplados y reutilizables con 
            <span class="font-medium">@nuxt/ui</span>, 
            enfocados en consistencia visual, accesibilidad y mantenibilidad.
          </p>
        </UCard>

        
        <UCard class="bg-ocean-50 dark:bg-gray-800">
          <template #header>
            <UIcon name="i-lucide-server" class="w-8 h-8 text-ocean-500" />
          </template>

          <p class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Server-Side Rendering & Estado Global
          </p>

          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Integración de
            <span class="font-medium">Server-Side Rendering (SSR)</span>,
            <span class="font-medium">Pinia</span> y
            <span class="font-medium">$fetch</span>
            para la gestión de datos, estado global y carga eficiente de información.
          </p>

        </UCard>

      </div>
    </div>

    <div class="mt-24 pt-10 border-t border-gray-200 dark:border-gray-800">
      <h2 class="text-3xl font-bold text-ocean-600 dark:text-ocean-400 mb-10 text-center">
        Arquitectura & Decisiones Técnicas
      </h2>

      <div class="max-w-4xl mx-auto space-y-6 text-left text-gray-600 dark:text-gray-400">

        <p class="text-lg">
          Este proyecto fue diseñado siguiendo principios de arquitectura frontend moderna,
          priorizando escalabilidad, mantenibilidad y una experiencia de usuario fluida.
        </p>

        <div class="space-y-5">
          
          <div class="p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p class="font-semibold text-gray-800 dark:text-gray-200 mb-1">
              La URL como fuente de verdad
            </p>
            <p class="text-sm">
              La paginación y los filtros se sincronizan con la URL, permitiendo navegación
              con back/forward del navegador y enlaces compartibles.
            </p>
          </div>

          <div class="p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p class="font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Separación de responsabilidades
            </p>
            <p class="text-sm">
              La lógica de datos, estado global y navegación se organiza en composables
              y stores desacoplados y reutilizables.
            </p>
          </div>

          <div class="p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p class="font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Server-Side Rendering (SSR)
            </p>
            <p class="text-sm">
              Los datos iniciales se cargan en el servidor para mejorar el rendimiento,
              el SEO y la experiencia de carga inicial.
            </p>
          </div>

          <div class="p-5 rounded-lg bg-gray-50 dark:bg-gray-800">
            <p class="font-semibold text-gray-800 dark:text-gray-200 mb-1">
              Escalabilidad
            </p>
            <p class="text-sm">
              El mismo patrón de arquitectura se reutiliza para personajes
              y ubicaciones, reduciendo duplicación de código.
            </p>
          </div>

        </div>
      </div>
    </div>


  </div>
</template>