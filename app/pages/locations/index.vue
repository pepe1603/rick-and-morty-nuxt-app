<script setup lang="ts">
import { useLocationStore } from '~/store/location';
import { useLazyFetchLocations } from '~/composables/useRickAndMortyApi';
// El componente LocationCard será importado automáticamente por Nuxt 3

const store = useLocationStore();
const route = useRoute();
const router = useRouter();

const { fetchLocations, isLoading, error } = useLazyFetchLocations();

// Obtener la página inicial de la URL y cargar SSR
const initialPage = Number(route.query.page) || 1;
await fetchLocations(initialPage);

// Manejo del Cambio de Página
const handlePageChange = async (page: number) => {
  router.push({ query: { page } });
  await fetchLocations(page); 
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// SEO
useHead({
  title: 'Ubicaciones | Rick and Morty'
});
</script>

<template>
  <div class="space-y-10">
    <div class="py-10 text-center">
      <h1 class="text-4xl font-extrabold text-terra-700 dark:text-terra-300">
        Dimensiones y Ubicaciones
      </h1>
      <p class="text-gray-400">
        Explora los diferentes planetas y dimensiones visitados.
      </p>
    </div>

    <div v-if="isLoading && store.locations.length === 0" class="text-center py-20">
      <UIcon name="i-lucide-globe" class="w-12 h-12 animate-spin text-terra-500 dark:text-terra-400 mx-auto" />
      <p class="mt-4 text-xl">Mapeando el universo...</p>
    </div>

    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-triangle"
        title="¡Error de Teletransporte!"
        description="Ocurrió un error al cargar las ubicaciones. Intenta recargar la página."
        color="error"
        variant="subtle"
      />
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LocationCard
          v-for="location in store.locations"
          :key="location.id"
          :location="location"
        />
      </div>

      <div class="flex justify-center mt-10">
        <UPagination
          :model-value="store.currentPage"
          :page-count="10"
          :total="store.totalCount"
          :active-button="{ color: 'terra', variant: 'solid' }"
          :inactive-button="{ color: 'terra', variant: 'ghost' }"
          @update:model-value="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>