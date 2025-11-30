<script setup lang="ts">
import type { Character } from "~/store/types";

const { getColorVariant } = useCustomColorVariants();

// Define las props que espera el componente
interface Props {
  character: Character;
}

const props = defineProps<Props>();

// --- NUEVO: Propiedad computada para la ruta de detalle ---
const characterLink = computed(() => `/characters/${props.character.id}`);
// --------------------------------------------------------

// Función computada para determinar el color del badge de Status
const statusBadgeColor = computed(() => {
  switch (props.character.status) {
    case "Alive":
      return "forest" as const;
    case "Dead":
      return "sakura" as const;
    default:
      return "ocean" as const;
  }
});

</script>

<template>
  <ULink :to="characterLink" class="block">
    <UCard
      class="hover:shadow-xl transition duration-300 transform hover:scale-[1.02]"
      
    >
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-2/5 shrink-0">
          <img
            :src="character.image"
            :alt="character.name"
            class="w-full h-48 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
          />
        </div>

        <div class="p-4 sm:p-6 sm:w-3/5 space-y-3">
          <div class="flex justify-between items-start">
            <h3
              class="text-xl font-bold leading-tight text-ocean-700 dark:text-ocean-300"
            >
              {{ character.name }}
            </h3>
            <UBadge
            :ui="getColorVariant(statusBadgeColor, 'subtle')"
            variant="subtle"
            size="md"
            class="capitalize shrink-0 ml-4"
          >
            <UIcon name="i-lucide-activity" class="w-4 h-4 mr-1" />
            {{ character.status }}
          </UBadge>

          </div>

          <p class="text-sm text-gray-700 dark:text-gray-300">
            <span class="font-semibold text-gray-900 dark:text-gray-100"
              >Especie:</span
            >
            {{ character.species }} ({{ character.gender }})
          </p>

          <p class="text-sm text-gray-700 dark:text-gray-300">
            <UIcon
              name="i-lucide-map-pin"
              class="w-4 h-4 mr-1 text-sakura-500"
            />
            <span class="font-semibold text-gray-900 dark:text-gray-100"
              >Última Ubicación:</span
            >
            {{ character.location.name }}
          </p>

          <p class="text-sm text-gray-700 dark:text-gray-300">
            <UIcon name="i-lucide-globe" class="w-4 h-4 mr-1 text-forest-500" />
            <span class="font-semibold text-gray-900 dark:text-gray-100"
              >Origen:</span
            >
            {{ character.origin.name }}
          </p>

          <p
            v-if="character.episode[0]"
            class="text-xs text-gray-500 dark:text-gray-400"
          >
            Visto por primera vez en: Episodio
            {{ character.episode[0].split("/").pop() }}
          </p>
        </div>
      </div>
    </UCard>
  </ULink>
</template>
