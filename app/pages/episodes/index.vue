<script setup lang="ts">
import { useEpisodeStore } from '~/store/episodes';
import { useLazyFetchEpisodes } from '~/composables/useRickAndMortyApi';

const store = useEpisodeStore();
const route = useRoute();
const router = useRouter();

const { fetchEpisodes, isLoading, error } = useLazyFetchEpisodes();

// 1. Obtener la página inicial de la URL
const initialPage = Number(route.query.page) || 1;

// 2. Carga SSR inicial (Solo necesitamos la página)
await fetchEpisodes(initialPage);

// 3. Manejo del Cambio de Página
const handlePageChange = async (page: number) => {
  // 3.1. Actualizar la URL inmediatamente
  router.push({ 
    query: { page } 
  });
  
  // 3.2. Esperar la carga
  await fetchEpisodes(page); 
  
  // 3.3. Desplazamiento
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 4. SEO
useHead({
  title: 'Episodios | Rick and Morty'
})
</script>

<template>
  <div class="space-y-10">
    <div class="py-10 text-center">
      <h1 class="text-4xl font-extrabold text-ocean-700 dark:text-ocean-300">
        Episodios de Rick and Morty
      </h1>
      <p class="text-gray-400">
        Explora la lista completa de episodios de todas las temporadas.
      </p>
    </div>

    <div
      v-if="isLoading && store.episodes.length === 0"
      class="text-center py-20"
    >
      <UIcon
        name="i-lucide-loader-circle"
        class="w-12 h-12 animate-spin text-ocean-500 dark:text-ocean-400 mx-auto"
      />
      <p class="mt-4 text-xl">Cargando temporadas y episodios...</p>
    </div>

    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-triangle"
        title="¡Error de Portal!"
        description="Ocurrió un error al cargar los episodios. Intenta recargar la página."
        color="error"
        variant="subtle"
      >
        <template #footer>
          <UButton
            color="error"
            variant="link"
            icon="i-lucide-rotate-cw"
            @click="fetchEpisodes(store.currentPage)"
            class="mt-2"
          >
            Reintentar 
          </UButton>
        </template>
      </UAlert>
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ULink
          v-for="episode in store.episodes"
          :key="episode.id"
          :to="`/episodes/${episode.id}`"
          class="block hover:shadow-xl transition duration-300 rounded-lg"
        >
          <UCard :ui="{ root: 'h-full flex flex-col justify-between' }">
            <div>
              <UBadge
                :color="episode.episode.startsWith('S01') ? 'success' : 'info'"
                variant="subtle"
                class="mb-2"
              >
                {{ episode.episode }}
              </UBadge>
              <h2 class="text-xl font-bold text-gray-900 dark:text-white">
                {{ episode.name }}
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Fecha al aire: {{ episode.air_date }}
              </p>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <UIcon name="i-lucide-users" class="w-4 h-4 mr-1 text-terra-500" />
                <span class="text-xs text-gray-500">
                    Apariciones de personajes: {{ episode.characters.length }}
                </span>
            </div>
          </UCard>
        </ULink>
      </div>

      <div class="flex justify-center mt-10">
        <UPagination
          :model-value="store.currentPage"
          :page-count="10"
          :total="store.totalCount"
          :ui="{ list: 'flex items-center gap-1', item: 'size-4' }" 
          :active-button="{ color: 'sky', variant: 'solid' }"
          :inactive-button="{ color: 'sky', variant: 'ghost' }"
          @update:model-value="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>