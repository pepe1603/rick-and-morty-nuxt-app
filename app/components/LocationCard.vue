<script setup lang="ts">
import type { Location } from '~/types';

const props = defineProps<{
  location: Location
}>();
</script>

<template>
  <ULink
    :to="`/locations/${location.id}`"
    class="block h-full hover:shadow-xl transition duration-300 rounded-lg group"
  >
    <UCard 
      :ui="{ 
        
        root: 'h-full flex flex-col justify-between',
        body: 'p-2 ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-terra-500 dark:group-hover:ring-terra-400' 
      }"
    >
      <div>
        <div class="flex items-start space-x-3 mb-2">
          <UIcon name="i-lucide-map-pin" class="w-6 h-6 shrink-0 text-terra-500 transition duration-300 group-hover:scale-110" />
          <div class="min-w-0">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white truncate group-hover:text-terra-600 dark:group-hover:text-terra-400">
              {{ location.name }}
            </h2>
          </div>
        </div>
        
        <UBadge 
          color="info" 
          variant="subtle" 
          size="sm" 
          class="font-medium ml-9"
        >
          {{ location.type }}
        </UBadge>
      </div>
      
      <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
        <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <UIcon name="i-lucide-aperture" class="w-4 h-4 mr-1 text-ocean-500" />
          Dimensión: <span class="font-medium ml-1 text-gray-700 dark:text-gray-300">{{ location.dimension }}</span>
        </p>
        
        <p class="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <UIcon name="i-lucide-users" class="w-4 h-4 mr-1 text-terra-500" />
          Residentes: <span class="font-medium ml-1 text-gray-700 dark:text-gray-300">{{ location.residents.length }}</span>
        </p>
      </div>
    </UCard>
  </ULink>
</template>