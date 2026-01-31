<script setup lang="ts">
import { useLocationStore } from '~/store/location';
import { useLazyFetchLocations } from '~/composables/useRickAndMortyApi';
import { useRoutePagination } from '~/composables/useRoutePagination';

const store = useLocationStore();
const { fetchLocations, isLoading, error } = useLazyFetchLocations();
const { page, name, setSearch } = useRoutePagination();

// Estado local del input de búsqueda
const searchQuery = ref(name.value);

// SSR initial fetch
await fetchLocations(page.value, name.value);

// Watch para cambios de página o búsqueda
watch([page, name], ([newPage, newName]) => {
  searchQuery.value = newName;
  fetchLocations(newPage, newName);
});

// Búsqueda con debounce
watchDebounced(
  searchQuery,
  (value) => {
    setSearch(value);
  },
  { debounce: 800 }
);

// Scroll al cambiar página
const handlePageChange = () => {
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

    <!-- Buscador -->
    <div class="max-w-xl mx-auto">
      <UInput
        v-model="searchQuery"
        icon="i-lucide-search"
        placeholder="Buscar ubicación  (El retraso es de 0.7 segundos)"
        class="w-full max-w-lg"
        size="lg"
        variant="outline"
      />
    </div>

    <!-- Loading State -->
    <div v-if="isLoading && store.locations.length === 0" class="text-center py-20">
      <UIcon 
        name="i-lucide-loader-circle" 
        class="w-12 h-12 animate-spin text-terra-500 dark:text-terra-400 mx-auto" 
      />
      <p class="mt-4 text-xl">Mapeando el universo...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-triangle"
        title="¡Error de Teletransporte!"
        description="Ocurrió un error al cargar las ubicaciones. Intenta recargar la página."
        color="error"
        variant="subtle"
      >
        <template #footer>
          <UButton
            color="error"
            variant="link"
            icon="i-lucide-rotate-cw"
            @click="fetchLocations(page, name)"
            class="mt-2"
          >
            Reintentar 
          </UButton>
        </template>
      </UAlert>
    </div>

    <!-- Empty State -->
    <div v-else-if="store.locations.length === 0" class="py-20 max-w-xl mx-auto">
      <UAlert
        icon="i-lucide-compass-off"
        title="Sin resultados"
        description="No se encontraron ubicaciones con ese nombre."
        color="warning"
        variant="subtle"
      />
    </div>

    <!-- Locations Grid -->
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LocationCard
          v-for="location in store.locations"
          :key="location.id"
          :location="location"
        />
      </div>

      <!-- Pagination -->
      <div class="flex justify-center mt-10">
        <UPagination
          v-model:page="page"
          :total="store.totalCount"
          :items-per-page="20"
          @update:page="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>
