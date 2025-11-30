import { ref, watch, type Ref } from 'vue';
import type { Character, CharacterApiResponse } from '~/store/types';
import { useCharacterStore } from '~/store/characters';

const API_BASE_URL = 'https://rickandmortyapi.com/api/character/';

//
// -------------- FETCH LISTA MEJORADO (useLazyFetch) ------------------
//
export const useLazyFetchCharacters = () => {
  const store = useCharacterStore();

  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  // 1. Ahora acepta el término de búsqueda 'name'
  const fetchCharacters = async (
    page: number = store.currentPage, 
    name: string = ''
  ) => {
    
    // 2. Establecer la página en el store ANTES de la llamada
    store.setPage(page);

    isLoading.value = true;
    error.value = null;

    try {
      // 3. Construir la URL con los parámetros
      let url = `${API_BASE_URL}?page=${page}`;
      if (name) {
        url += `&name=${name}`; // Añadir el parámetro de búsqueda
      }
      
      const res = await $fetch<CharacterApiResponse>(url);

      // 4. Manejo de respuesta
      store.setCharacters(res.results);
      store.setInfo(res.info);
      
    } catch (e: any) {
      error.value = e;
      store.clear();
      // Nota: La API de Rick and Morty devuelve un 404 si no hay resultados, 
      // lo cual dispara el catch. Esto es manejado correctamente por la UI.
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchCharacters,
    isLoading,
    error,
  };
};

//
// -------------- FETCH DETALLE (Sin Cambios, se mantiene) ------------------
//
export const useFetchCharacterById = (id: Ref<string> | string) => {
  const characterId = typeof id === 'string' ? ref(id) : id;

  const character = ref<Character | null>(null);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const fetchOne = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      character.value = await $fetch<Character>(`${API_BASE_URL}${characterId.value}`);
    } catch (e: any) {
      error.value = e;
      character.value = null; 
    } finally {
      isLoading.value = false;
    }
  };

  watch(characterId, fetchOne, { immediate: true });

  return {
    character,
    isLoading,
    error,
  };
};