<script setup lang="ts">
import { useCharacterStore } from "~/store/characters"
import { useLazyFetchCharacters } from "~/composables/useRickAndMortyApi"
import { useRoutePagination } from "~/composables/useRoutePagination"

const store = useCharacterStore()
const { fetchCharacters, isLoading, error } = useLazyFetchCharacters()
const { page, name, setSearch } = useRoutePagination()

// estado local del input
const searchQuery = ref(name.value)

// SSR initial fetch
await fetchCharacters(page.value, name.value)

// 🔥 ÚNICO watcher que hace fetch
watch(
  [page, name],
  ([newPage, newName]) => {
    searchQuery.value = newName
    fetchCharacters(newPage, newName)
  }
)

// búsqueda con debounce
watchDebounced(
  searchQuery,
  (value) => {
    setSearch(value)
  },
  { debounce: 800 }
)


const handlePageChange = (newPage: number) => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<template>
  <div class="space-y-10">
    <div class="py-10 text-center">
      <h1 class="text-4xl font-extrabold text-ocean-700 dark:text-ocean-300">
        Personajes de Rick and Morty
      </h1>
      <p class="text-gray-400">
        Explora personajes, filtra, navega y descubre más.
      </p>
    </div>

    <div class="max-w-xl mx-auto">
      <UInput
        v-model="searchQuery"
        icon="i-lucide-search"
        placeholder="Buscar personaje (El retraso es de 0.7 segundos)"
        class="w-full max-w-lg"
        size="lg"
        variant="outline"
      />
    </div>

    <div v-if="isLoading && store.characters.length === 0" class="text-center py-20">
      <UIcon name="i-lucide-loader-circle" class="w-12 h-12 animate-spin mx-auto" />
    </div>

    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-triangle"
        title="Error"
        description="No se pudieron cargar los personajes."
        color="error"
      />
    </div>

    <div v-else-if="store.characters.length === 0" class="py-20 max-w-xl mx-auto">
      <UAlert
        icon="i-lucide-compass-off"
        title="Sin resultados"
        description="No se encontraron personajes."
      />
    </div>

    <div v-else>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CharacterCard
          v-for="character in store.characters"
          :key="character.id"
          :character="character"
        />
      </div>

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

