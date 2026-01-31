<!-- layouts/default.vue -->
<script setup lang="ts">
const { getColorVariant } = useCustomColorVariants()

const links = [
  { label: 'Inicio', icon: 'i-lucide-home', to: '/' },
  { label: 'Personajes', icon: 'i-lucide-user-check', to: '/characters' },
  { label: 'Episodios', icon: 'i-lucide-monitor-play', to: '/episodes' },
  { label: 'Ubicaciones', icon: 'i-lucide-map-pinned', to: '/locations' },
]

const colorMode = useColorMode()
const isDark = computed({
  get: () => colorMode.value === 'dark',
  set: () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">

    <UHeader
      :links="links"
      class="bg-forest-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
    >
      <!-- LOGO -->
      <template #left>
        <ULink to="/" class="flex items-center gap-2">
          <UIcon name="i-lucide-rocket" class="w-6 h-6 text-forest-600 dark:text-forest-400" />
          <span class="text-xl font-bold text-forest-700 dark:text-forest-300">
            R&M Explorer
          </span>
        </ULink>
      </template>

      <!-- ACTIONS -->
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
        </ClientOnly>
      </template>

      <!-- ✅ MOBILE MENU -->
      <template #body>
        <nav class="space-y-2">
          <ULink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-3 px-4 py-3 rounded-lg
                   text-gray-700 dark:text-gray-200
                   hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <UIcon :name="link.icon" class="w-5 h-5 text-forest-500" />
            <span class="font-medium">
              {{ link.label }}
            </span>
          </ULink>
        </nav>
      </template>
    </UHeader>

    <!-- CONTENT -->
    <UContainer class="flex-1">
      <main class="py-10">
        <slot :key="$route.fullPath" />
      </main>
    </UContainer>

    <!-- FOOTER -->
    <footer class="border-t border-gray-200 dark:border-gray-800">
      <UContainer class="flex justify-center items-center py-4">
        <p class="text-sm text-gray-500">
          Data by
          <ULink
            to="https://rickandmortyapi.com/"
            target="_blank"
            class="text-forest-600 hover:text-forest-700
                   dark:text-forest-400 dark:hover:text-forest-500 font-semibold"
          >
            The Rick and Morty API
          </ULink>
        </p>
      </UContainer>
    </footer>

  </div>
</template>
