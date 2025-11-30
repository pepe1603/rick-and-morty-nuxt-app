<!-- layouts/default.vue -->
<script setup lang="ts">
// Define los enlaces de navegación para usar en el menú


const getColorVariant = useCustomColorVariants()

const links = [{
  label: 'Inicio',
  icon: 'i-lucide-home',
  to: '/',
}, {
  label: 'Personajes',
  icon: 'i-lucide-user-check',
  to: '/characters',
}, {
  label: 'Episodios',
  icon: 'i-lucide-monitor-play',
  to: '/episodes',
}, {
  label: 'Ubicaciones',
  icon: 'i-lucide-map-pinned',
  to: '/locations',
}]

// Configuración del Color Mode (Dark/Light)
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div>
    <UHeader :links="links" class="bg-forest-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <template #left>
        <span class="text-2xl font-bold text-forest-700 dark:text-forest-300">
          <UIcon name="i-lucide-rocket" class="w-6 h-6 mr-1" /> R&M Explorer
        </span>
      </template>

      <template #right>
        <ClientOnly>
          <UButton
            :icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
            color="success"
            variant="ghost"
            class="rounded-full"
            aria-label="Theme"
            @click="isDark = !isDark"
          />
          <template #fallback>
            <div class="w-8 h-8" /> 
          </template>
        </ClientOnly>
      </template>
    </UHeader>

    <UContainer>
      <main class="py-10">
        <slot :key="$route.fullPath" />
      </main>
    </UContainer>

    <div class="border-t border-gray-200 dark:border-gray-800 mt-auto">
        <UContainer class="flex justify-center items-center py-4">
            <p class="text-sm text-gray-500">
                Data by <ULink to="https://rickandmortyapi.com/" target="_blank" class="text-forest-600 hover:text-forest-700 dark:text-forest-400 dark:hover:text-forest-500 font-semibold">The Rick and Morty API</ULink>
            </p>
        </UContainer>
    </div>
  </div>
</template>