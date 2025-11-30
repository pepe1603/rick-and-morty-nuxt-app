<script setup lang="ts">
import { useCharacterStore } from "~/store/characters";
import { useLazyFetchCharacters } from "~/composables/useRickAndMortyApi";
// Asumimos que ref, watchDebounced, useRoute, useRouter se auto-importan o se importan desde 'vue'

const store = useCharacterStore();
// Asumimos que useCustomColorVariants es un composable disponible
const { getColorVariant } = useCustomColorVariants(); 
const route = useRoute();
const router = useRouter();

const { fetchCharacters, isLoading, error } = useLazyFetchCharacters();

// 1. Estado Local para la Búsqueda (Sincronizado con la URL)
const searchQuery = ref(route.query.name as string || '');

// 2. Obtener los parámetros iniciales de la URL
const initialPage = Number(route.query.page) || 1;
const initialName = route.query.name as string || '';

// 3. Carga SSR inicial
await fetchCharacters(initialPage, initialName);


// 4. Función para manejar la Búsqueda (Mejorada para mantener la página al borrar)
// **NOTA:** Se eliminó el argumento 'page' del watcher, ya que se decide internamente.
const handleSearch = (name: string) => {
    const trimmedName = name.trim();
    let targetPage = 1;
    
    // Lógica #3: Si la búsqueda está vacía, volvemos a la página actual del store.
    // Si hay un nombre, siempre reiniciamos a la página 1.
    if (!trimmedName) {
        targetPage = store.currentPage; 
    }

    // 4.2. Construir el nuevo query de la URL
    const newQuery = { 
        page: targetPage,
        // Solo incluye 'name' si NO está vacío, para limpiar la URL
        ...(trimmedName && { name: trimmedName }) 
    };

    router.push({ query: newQuery });
    // El 'fetchCharacters' se ejecutará con los nuevos parámetros
    fetchCharacters(targetPage, trimmedName);
};


// 5. Watcher para la Búsqueda (Debounce ajustado a 700ms)
watchDebounced(searchQuery, (newName) => {
    // Solo necesitamos pasar el nuevo nombre. handleSearch decide la página.
    handleSearch(newName); 
}, { debounce: 1000, maxWait: 10000 });


// 6. Manejo del Cambio de Página (Async/Await y Limpieza para la Paginación)
const handlePageChange = async (page: number) => {
  const currentSearch = searchQuery.value.trim(); // Limpiamos el valor de búsqueda actual
  
  // 6.1. Actualizar la URL inmediatamente
  router.push({ 
    query: { 
      page, 
      // Usar el nombre sanitizado o undefined si está vacío
      name: currentSearch || undefined 
    } 
  });
  
  // 6.2. Esperar la carga. Esto **fuerza** la actualización de la lista de personajes.
  await fetchCharacters(page, currentSearch); 
  
  // 6.3. Desplazamiento
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="space-y-10">
    <div class="py-10 text-center">
      <h1 class="text-4xl font-extrabold text-ocean-700 dark:text-ocean-300">Personajes de Rick and Morty</h1>
      <p class="text-gray-400">
        Explora personajes, filtra, navega y descubre más.
      </p>
    </div>

    <div class="max-w-xl mx-auto ">
      <UInput
        v-model="searchQuery"
        icon="i-lucide-search"
        placeholder="Buscar personaje (El retraso es de 0.7 segundos)"
        class="w-full max-w-lg"
        size="lg"
        color="primary"
        variant="outline"
      />
    </div>
    
    <div
      v-if="isLoading && store.characters.length === 0"
      class="text-center py-20"
    >
      <UIcon
        name="i-lucide-loader-circle"
        class="w-12 h-12 animate-spin text-ocean-500 dark:text-ocean-400 mx-auto"
      />
      <p class="mt-4 text-xl">Cargando dimensiones y personajes...</p>
    </div>

    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-triangle"
        title="¡Error de Conexión!"
        description="Ocurrió un error al cargar los personajes. Intenta recargar la página o verifica tu conexión."
        color="error"
        variant="subtle"
      >
        <template #footer>
          <UButton
            :ui="getColorVariant('sakura', 'link')"
            icon="i-lucide-rotate-cw"
            @click="fetchCharacters(store.currentPage, searchQuery.trim())"
            class="mt-2"
          >
            Reintentar
          </UButton>
        </template>
      </UAlert>
    </div>

    <div
      v-else-if="store.characters.length === 0 && !isLoading"
      class="py-20 max-w-xl mx-auto"
    >
      <UAlert
        icon="i-lucide-compass-off"
        title="No se encontraron personajes"
        description="El portal no encontró resultados para tu búsqueda actual. Intenta con otros parámetros."
        color="info"
        variant="soft"
      />
    </div>

    <div v-else>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CharacterCard
          v-for="character in store.characters"
          :key="character.id"
          :character="character"
        />
        <template v-if="isLoading">
          <div class="col-span-1 lg:col-span-2 text-center py-4">
            <UIcon
              name="i-lucide-zap"
              class="w-6 h-6 animate-pulse text-forest-500"
            />
            <p class="text-sm text-gray-500">Actualizando lista...</p>
          </div>
        </template>
      </div>


      <div class="flex justify-center mt-10">
        <UPagination
          :model-value="store.currentPage"
          :page-count="store.totalPages"
          :total="store.totalCount"
          :ui="{ list: 'flex items-center gap-1', item: { size: 'lg' } }" 
          :active-button="{ color: 'forest', variant: 'solid' }"
          :inactive-button="{ color: 'forest', variant: 'ghost' }"
          @update:model-value="handlePageChange"
        />
      </div>
    </div>
  </div>
</template>