<script setup lang="ts">
import { useFetchLocationById } from '~/composables/useRickAndMortyApi';
import type { Location, Character } from '~/types';
import EpisodeCharacterCard from '~/components/EpisodeCharacterCard.vue';

const route = useRoute();
const locationId = computed(() => route.params.id as string);

// 1. Fetch de la Ubicación por ID
const { location, isLoading, error } = useFetchLocationById(locationId);

// 2. Fetch de Personajes Residentes
const residents = ref<Character[]>([]);
const isResidentsLoading = ref(false);
const residentsError = ref<Error | null>(null);

/**
 * Función para cargar los detalles de los personajes residentes.
 */
const fetchResidentsForLocation = async (locationData: Location) => {
  isResidentsLoading.value = true;
  residentsError.value = null;
  residents.value = [];

  try {
    const residentUrls = locationData.residents.filter(url => url);

    // Si no hay residentes, terminamos la carga
    if (residentUrls.length === 0) return;

    // Ejecutar todas las llamadas a la API en paralelo (Promise.all)
    const results = await Promise.all(
      residentUrls.map(url => $fetch<Character>(url))
    );

    residents.value = results;

  } catch (e: any) {
    residentsError.value = e;
  } finally {
    isResidentsLoading.value = false;
  }
};

// 3. Observar el cambio en el objeto location
watch(location, (newLocation) => {
  if (newLocation) {
    fetchResidentsForLocation(newLocation);
  } else {
    residents.value = [];
  }
}, { immediate: true });

// 4. SEO Dinámico
useHead({
  title: computed(() => 
    location.value ? `${location.value.name} (${location.value.dimension}) | Rick and Morty` : 'Cargando Ubicación...'
  ),
});
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 py-8">
    
    <div class="mb-6">
      <UButton
        to="/locations"
        variant="ghost"
        color="secondary"
        icon="i-lucide-arrow-left"
        class="hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        Volver a las ubicaciones
      </UButton>
    </div>

    <div v-if="isLoading" class="text-center py-20">
      <UIcon name="i-lucide-loader-circle" class="w-12 h-12 animate-spin text-terra-500 dark:text-terra-400 mx-auto" />
      <p class="mt-4 text-xl">Teletransportando a la ubicación...</p>
    </div>

    <div v-else-if="error" class="max-w-xl mx-auto py-20">
      <UAlert
        icon="i-lucide-alert-octagon"
        title="Ubicación No Encontrada"
        description="El ID proporcionado no corresponde a ninguna ubicación o dimensión."
        color="error"
        variant="subtle"
      />
    </div>

    <div v-else-if="location" class="space-y-12">

      <UCard 
        :ui="{ 
          body:  'grid grid-cols-1 md:grid-cols-3 gap-6 items-center ring-terra-500 dark:ring-terra-400' 
        }"
      >
        <div class="md:col-span-2 space-y-2">
          <UBadge 
            color="neutral" 
            variant="solid" 
            size="lg"
          >
            {{ location.dimension }}
          </UBadge>
          <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white">
            {{ location.name }}
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            <UIcon name="i-lucide-map-pin" class="mr-1" />
            Tipo: <span class="font-medium text-sky-600 dark:text-sky-400">{{ location.type }}</span>
          </p>
        </div>
        <div class="md:col-span-1 text-right">
          <UIcon name="i-lucide-aperture" class="w-20 h-20 text-terra-200 dark:text-terra-700 opacity-50" />
        </div>
      </UCard>

      <section class="space-y-6">
        <h2 class="text-3xl font-bold border-b border-gray-200 dark:border-gray-700 pb-2">
          Residentes Conocidos ({{ location.residents.length }})
        </h2>

        <div v-if="location.residents.length === 0" class="py-8 text-center bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UIcon name="i-lucide-ban" class="w-8 h-8 text-gray-400 mb-2" />
            <p class="text-md text-gray-500">No hay residentes conocidos en esta ubicación según la base de datos.</p>
        </div>
        
        <div v-else-if="isResidentsLoading" class="text-center py-10">
          <UIcon name="i-lucide-zap" class="w-8 h-8 animate-pulse text-terra-500 mx-auto" />
          <p class="mt-2 text-md text-gray-500">Localizando residentes...</p>
        </div>

        <div v-else-if="residentsError" class="py-10">
          <UAlert
            icon="i-lucide-bug"
            title="Fallo al Cargar Residentes"
            description="Hubo un error al intentar obtener los detalles de los personajes residentes."
            color="error"
            variant="subtle"
          />
        </div>

        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> 
          <EpisodeCharacterCard 
            v-for="resident in residents" 
            :key="resident.id" 
            :character="resident" 
          />
        </div>
      </section>

    </div>
  </div>
</template>