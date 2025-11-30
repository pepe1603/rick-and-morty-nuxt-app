// app/store/locations.ts
import { defineStore } from 'pinia';
import type { Location, Info } from '~/types'; 

interface LocationsState {
  locations: Location[];
  info: Info | null;
  currentPage: number;
  // Puedes añadir un término de búsqueda si planeas buscar por nombre/dimensión
  // searchTerm: string; 
}

export const useLocationStore = defineStore('locations', {
  state: (): LocationsState => ({
    locations: [],
    info: null,
    currentPage: 1
    // searchTerm: ''
  }),

  getters: {
    totalPages: (state) => state.info?.pages ?? 1,
    totalCount: (state) => state.info?.count ?? 0,
  },

  actions: {
    setLocations(list: Location[]) {
      this.locations = list;
    },
    setInfo(info: Info) {
      this.info = info;
    },
    setPage(page: number) {
      this.currentPage = Math.max(1, page); 
    },
    clear() {
      this.locations = [];
      this.info = null;
    },
  }
});