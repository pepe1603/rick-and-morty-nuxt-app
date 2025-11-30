// app/store/episodes.ts
import { defineStore } from 'pinia';
// Importamos los tipos desde la nueva ubicación '~/types'
import type { Episode, Info } from '~/types'; 

interface EpisodesState {
  episodes: Episode[];
  info: Info | null;
  currentPage: number;
}

export const useEpisodeStore = defineStore('episodes', {
  state: (): EpisodesState => ({
    episodes: [],
    info: null,
    currentPage: 1
  }),

  getters: {
    totalPages: (state) => state.info?.pages ?? 1,
    totalCount: (state) => state.info?.count ?? 0,
  },

  actions: {
    setEpisodes(list: Episode[]) {
      this.episodes = list;
    },
    setInfo(info: Info) {
      this.info = info;
    },
    // Asegura que la página sea siempre al menos 1
    setPage(page: number) {
      this.currentPage = Math.max(1, page); 
    },
    clear() {
      this.episodes = [];
      this.info = null;
    },
  }
});