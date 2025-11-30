// store/characters.ts
import { defineStore } from 'pinia';
import type { Character, Info } from './types';

interface CharactersState {
  characters: Character[];
  info: Info | null;
  currentPage: number;
}

export const useCharacterStore = defineStore('characters', {
  state: (): CharactersState => ({
    characters: [],
    info: null,
    currentPage: 1
  }),

  getters: {
    totalPages: (state) => state.info?.pages ?? 1,
    totalCount: (state) => state.info?.count ?? 0,
  },

  actions: {
    setCharacters(list: Character[]) {
      this.characters = list;
    },
    setInfo(info: Info) {
      this.info = info;
    },
    // Asegura que la página sea siempre al menos 1
    setPage(page: number) {
      this.currentPage = Math.max(1, page); 
    },
    clear() {
      this.characters = [];
      this.info = null;
    },
  }
});