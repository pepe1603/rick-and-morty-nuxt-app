// app/composables/useRickAndMortyApi.ts

import { ref, watch, type Ref } from 'vue';
import type { 
  Character, 
  CharacterApiResponse, 
  Episode, 
  EpisodeApiResponse,
  Location,
  LocationApiResponse,
} from '~/types'; 
import { useCharacterStore } from '~/store/characters';
import { useEpisodeStore } from '~/store/episodes';
import { useLocationStore } from '~/store/location';

// La URL base de la API. Debe terminar en '/' y no incluir el recurso.
const API_BASE_URL = 'https://rickandmortyapi.com/api/';

//
// -------------------- FETCH LISTA DE PERSONAJES --------------------
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
      // 3. Construir la URL con el endpoint 'character' y los parámetros
      let url = `${API_BASE_URL}character?page=${page}`;
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

  return { fetchCharacters, isLoading, error };
};

//
// -------------------- FETCH DETALLE DE PERSONAJE --------------------
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
      // Conciso: Inyección directa del endpoint y el ID.
      character.value = await $fetch<Character>(`${API_BASE_URL}character/${characterId.value}`);
    } catch (e: any) {
      error.value = e;
      character.value = null; 
    } finally {
      isLoading.value = false;
    }
  };

  watch(characterId, fetchOne, { immediate: true });

  return { character, isLoading, error };
};


//
// -------------------- FETCH LISTA DE EPISODIOS --------------------
//
export const useLazyFetchEpisodes = () => {
  const store = useEpisodeStore();

  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const fetchEpisodes = async (
    page: number = store.currentPage, 
    // La API de episodios no tiene un parámetro de búsqueda por 'name', 
    // por lo que el segundo argumento queda vacío por ahora.
  ) => {
    
    store.setPage(page);

    isLoading.value = true;
    error.value = null;

    try {
      // Se construye la URL con el endpoint 'episode' y la página.
      let url = `${API_BASE_URL}episode?page=${page}`;
      
      const res = await $fetch<EpisodeApiResponse>(url);

      store.setEpisodes(res.results);
      store.setInfo(res.info);
      
    } catch (e: any) {
      error.value = e;
      store.clear();
    } finally {
      isLoading.value = false;
    }
  };

  return { fetchEpisodes, isLoading, error };
};

//
// -------------------- FETCH DETALLE DE EPISODIO --------------------
//
export const useFetchEpisodeById = (id: Ref<string> | string) => {
  const episodeId = typeof id === 'string' ? ref(id) : id;

  const episode = ref<Episode | null>(null);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const fetchOne = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      // Conciso: Inyección directa del endpoint 'episode' y el ID.
      episode.value = await $fetch<Episode>(`${API_BASE_URL}episode/${episodeId.value}`);
    } catch (e: any) {
      error.value = e;
      episode.value = null; 
    } finally {
      isLoading.value = false;
    }
  };

  watch(episodeId, fetchOne, { immediate: true });

  return { episode, isLoading, error };
};

//
// -------------------- NUEVO: FETCH LISTA DE UBICACIONES --------------------
//
export const useLazyFetchLocations = () => {
  const store = useLocationStore();

  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const fetchLocations = async (
    page: number = store.currentPage, 
    name: string = '' // La API sí soporta búsqueda por nombre/tipo/dimensión
  ) => {
    
    store.setPage(page);

    isLoading.value = true;
    error.value = null;

    try {
      let url = `${API_BASE_URL}location?page=${page}`;
      if (name) {
         url += `&name=${name}`; 
      }
      
      const res = await $fetch<LocationApiResponse>(url);

      store.setLocations(res.results);
      store.setInfo(res.info);
      
    } catch (e: any) {
      error.value = e;
      store.clear();
    } finally {
      isLoading.value = false;
    }
  };

  return { fetchLocations, isLoading, error };
};

//
// -------------------- NUEVO: FETCH DETALLE DE UBICACIÓN --------------------
//
export const useFetchLocationById = (id: Ref<string> | string) => {
  const locationId = typeof id === 'string' ? ref(id) : id;

  const location = ref<Location | null>(null);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const fetchOne = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      location.value = await $fetch<Location>(`${API_BASE_URL}location/${locationId.value}`);
    } catch (e: any) {
      error.value = e;
      location.value = null; 
    } finally {
      isLoading.value = false;
    }
  };

  watch(locationId, fetchOne, { immediate: true });

  return { location, isLoading, error };
};