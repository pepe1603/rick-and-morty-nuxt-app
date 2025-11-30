<script setup lang="ts">
import type { Character } from "~/store/types";
import { useFetchCharacterById } from "~/composables/useRickAndMortyApi";

// 1. Obtener la ruta
const route = useRoute();
const { getColorVariant } = useCustomColorVariants();

// 2. ID Reactivo
const characterId = computed(() => route.params.id as string);

// 3. Data fetching
const { character, isLoading, error } = useFetchCharacterById(characterId);

// 4. SEO Dinámico
useHead({
  title: computed(() =>
    character.value?.name
      ? `${character.value.name} | Detalle`
      : "Cargando Personaje..."
  ),
});

// 5. Lógica de UI para el estado (Status)
const getStatusUi = (status: Character["status"]) => {
  switch (status) {
    case "Alive":
      return { label: "Vivo", color: "success" as const, icon: "i-lucide-activity" };
    case "Dead":
      return { label: "Muerto", color: "error" as const, icon: "i-lucide-skull" };
    default:
      return { label: "Desconocido", color: "info" as const, icon: "i-lucide-help-circle" };
  }
};
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div class="mb-6">
      <UButton
        to="/characters"
        variant="ghost"
        color="neutral"
        icon="i-lucide-arrow-left"
        class="hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Volver al listado
      </UButton>
    </div>

    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 space-y-4">
      <UIcon
        name="i-lucide-loader-2"
        class="w-16 h-16 animate-spin text-forest-500"
      />
      <p class="text-lg text-gray-500 animate-pulse">Cargando datos biométricos...</p>
    </div>

    <UAlert
      v-else-if="error"
      icon="i-lucide-alert-octagon"
      color="error"
      variant="subtle"
      title="Error de Comunicación"
      :description="`No se pudo cargar el personaje ID: ${characterId}. Verifica tu conexión.`"
      class="my-10"
    />

    <div v-else-if="character" class="animate-fade-in">
      <UCard :ui="{ body: { padding: 'p-0 sm:p-0' }, header: { padding: 'p-4 sm:p-6' } }">
        
        <template #header>
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
             <div>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  {{ character.name }}
                </h1>
                <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                   ID: #{{ character.id }} &bull; Creado: {{ new Date(character.created).toLocaleDateString() }}
                </p>
             </div>
             
             <UBadge
                size="lg"
                :color="getStatusUi(character.status).color"
                variant="subtle"
                class="px-3 py-1.5"
             >
                <UIcon :name="getStatusUi(character.status).icon" class="w-5 h-5 mr-2" />
                {{ getStatusUi(character.status).label }}
             </UBadge>
          </div>
        </template>

        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/3 relative group overflow-hidden rounded">
            <img
              :src="character.image"
              :alt="character.name"
              class="w-full h-full object-cover min-h-[300px] transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
               <span class="text-white font-medium">Ver imagen completa</span>
            </div>
          </div>

          <div class="p-6 md:w-2/3 space-y-6">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div class="space-y-1">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Biología</p>
                <div class="flex items-center space-x-2">
                   <UIcon name="i-lucide-dna" class="w-5 h-5 text-ocean-500" />
                   <span class="text-lg font-medium text-gray-700 dark:text-gray-200">
                     {{ character.species }} 
                     <span class="text-gray-400 text-sm">({{ character.gender }})</span>
                   </span>
                </div>
              </div>

              <div class="space-y-1">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Origen</p>
                <div class="flex items-center space-x-2">
                   <UIcon name="i-lucide-globe" class="w-5 h-5 text-forest-500" />
                   <span class="text-lg font-medium text-gray-700 dark:text-gray-200">
                     {{ character.origin.name }}
                   </span>
                </div>
              </div>

               <div class="space-y-1 sm:col-span-2">
                <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Última ubicación conocida</p>
                <div class="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg flex items-center border border-gray-100 dark:border-gray-700">
                   <UIcon name="i-lucide-map-pin" class="w-5 h-5 text-sakura-500 mr-3" />
                   <span class="text-lg font-medium text-gray-800 dark:text-gray-100">
                     {{ character.location.name }}
                   </span>
                </div>
              </div>

            </div>

            <UDivider />

            <div>
              <div class="flex justify-between items-center mb-2">
                <p class="text-sm font-semibold text-gray-900 dark:text-white">
                  Apariciones en Episodios
                </p>
                <UBadge color="secondary" variant="solid" size="sm">
                   {{ character.episode.length }} Episodios
                </UBadge>
              </div>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                Primera aparición en: 
                <code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">
                  {{ character.episode[0] ? 'Episodio ' + character.episode[0].split('/').pop() : 'Desconocido' }}
                </code>
              </p>
            </div>

          </div>
        </div>
      </UCard>
    </div>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>