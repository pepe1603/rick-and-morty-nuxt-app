<script setup lang="ts">
import type { Character } from '~/types';

const { getColorVariant } = useCustomColorVariants();

const props = defineProps<{
  character: Character
}>();

// Función computada para determinar el color del badge de Status
// Usa tus colores personalizados: 'forest' (Vivo), 'sakura' (Muerto), 'ocean' (Desconocido).
const statusBadgeColor = computed(() => {
  switch (props.character.status) {
    case "Alive":
      // El "as const" se usa para asegurar que TypeScript infiera el tipo literal exacto ('forest'),
      // lo cual es bueno para la tipificación de UBadge.
      return "forest" as const;
    case "Dead":
      return "sakura" as const;
    default:
      return "ocean" as const;
  }
});
</script>

<template>
  <ULink
    :to="`/characters/${character.id}`"
    class="flex items-center space-x-4 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-gray-100 dark:border-gray-700"
  >
    <UAvatar
      :src="character.image"
      :alt="character.name"
      size="lg"
      img-class="object-cover"
      class="shrink-0"
    />

    <div class="grow min-w-0">
      <div class="flex items-center space-x-2">
        <h3 class="text-lg font-semibold truncate text-gray-900 dark:text-white hover:text-ocean-600 dark:hover:text-ocean-400">
          {{ character.name }}
        </h3>
      </div>
      
      <UBadge 
        :ui="getColorVariant(statusBadgeColor, 'subtle')"
        variant="subtle" 
        size="sm"
        class="mt-1"
      >
        <span class="capitalize">{{ character.status }}</span> - {{ character.species }}
      </UBadge>
    </div>
  </ULink>
</template>