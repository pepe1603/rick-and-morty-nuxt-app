<script setup lang="ts">
import { useFetchEpisodeById } from '~/composables/useRickAndMortyApi';
import type { Episode, Character } from '~/types';

const route = useRoute();
const episodeId = computed(() => route.params.id as string);

// 1. Fetch del Episodio por ID
const { episode, isLoading, error } = useFetchEpisodeById(episodeId);

// 2. Fetch de Personajes del Episodio
const characters = ref<Character[]>([]);
const isCharactersLoading = ref(false);
const charactersError = ref<Error | null>(null);

/**
 * Función para cargar los detalles de los personajes que aparecen en el episodio.
 * @param episodeData El objeto Episode devuelto por la API.
 */
const fetchCharactersForEpisode = async (episodeData: Episode) => {
  isCharactersLoading.value = true;
  charactersError.value = null;
  characters.value = [];

  try {
    // La API de Rick and Morty devuelve un array de URLs de personajes (episode.characters).
    // Usamos Promise.all para hacer fetch de todos los personajes simultáneamente.

    // 1. Obtener solo las URLs válidas
    const characterUrls = episodeData.characters.filter(url => url);

    // 2. Ejecutar todas las llamadas a la API en paralelo
    const results = await Promise.all(
      characterUrls.map(url => $fetch<Character>(url))
    );

    characters.value = results;

  } catch (e: any) {
    charactersError.value = e;
  } finally {
    isCharactersLoading.value = false;
  }
};

// 3. Observar el cambio en el objeto episode
watch(episode, (newEpisode) => {
  if (newEpisode) {
    fetchCharactersForEpisode(newEpisode);
  } else {
    // Limpiar si el episodio se borra (ej. si hay error)
    characters.value = [];
  }
}, { immediate: true });

// 4. SEO Dinámico
useHead({
  title: computed(() => 
    episode.value ? `${episode.value.name} (${episode.value.episode}) | Rick and Morty` : 'Cargando Episodio...'
  ),
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-8">
    
    <div class="mb-6">
      <UButton
        to="/episodes"
        variant="ghost"
        color="secondary"
        icon="i-lucide-arrow-left"
        class="hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Volver a la lista de episodios
      </UButton>
    </div>

    <div v-if="isLoading" class="text-center py-20">
      <UIcon name="i-lucide-loader-circle" class="w-12 h-12 animate-spin text-ocean-500 dark:text-ocean-400 mx-auto" />
      <p class="mt-4 text-xl">Buscando el episodio en el multiverso...</p>
    </div>

    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-octagon"
        title="Episodio No Encontrado"
        description="El ID proporcionado no corresponde a ningún episodio o el portal está cerrado."
        color="error" variant="subtle"
      />
    </div>

    <div v-else-if="episode" class="space-y-12">

      <UCard 
        :ui="{ 
          body: 'grid grid-cols-1 md:grid-cols-3 gap-6 items-center ring-ocean-500 dark:ring-ocean-400'
        }"
      >
        <div class="md:col-span-2 space-y-2">
          <UBadge 
            :color="episode.episode.startsWith('S01') ? 'success' : 'info'" 
            variant="solid" 
            size="lg"
          >
            {{ episode.episode }}
          </UBadge>
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white">
            {{ episode.name }}
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-calendar" class="mr-1" />
            Emitido el: <span class="font-medium text-ocean-600 dark:text-ocean-400">{{ episode.air_date }}</span>
          </p>
        </div>
        <div class="md:col-span-1 text-right">
          <UIcon name="i-lucide-tv" class="w-20 h-20 text-ocean-200 dark:text-ocean-700 opacity-50" />
        </div>
      </UCard>

      <section class="space-y-6 pt-4"> <h2 class="text-3xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
          Personajes en este Episodio ({{ episode.characters.length }})
        </h2>

        <div v-if="isCharactersLoading" class="text-center py-10">
          <UIcon name="i-lucide-zap" class="w-8 h-8 animate-pulse text-terra-500 mx-auto" />
          <p class="mt-2 text-md text-gray-500">Activando a los personajes...</p>
        </div>

        <div v-else-if="charactersError" class="py-10">
          <UAlert
            icon="i-lucide-bug"
            title="Fallo al Cargar Personajes"
            description="Hubo un error al intentar obtener los detalles de los personajes."
            color="error" variant="subtle"
          />
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> 
          <EpisodeCharacterCard 
            v-for="char in characters" 
            :key="char.id" 
            :character="char" 
          />
        </div>
      </section>

    </div>
  </div>
</template>