// app/types/index.ts

// --- TIPOS COMPARTIDOS ---
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface CharacterDetail {
  name: string;
  url: string;
}

// --- TIPOS DE PERSONAJE ---
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterDetail;
  location: CharacterDetail;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterApiResponse {
  info: Info;
  results: Character[];
}


// --- NUEVOS TIPOS DE EPISODIO ---
export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string; // Ej: "S01E01"
  characters: string[]; // Array de URLs de personajes
  url: string;
  created: string;
}

export interface EpisodeApiResponse {
  info: Info;
  results: Episode[];
}

// --- NUEVOS TIPOS DE UBICACIÓN ---
export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[]; // Array de URLs de personajes
  url: string;
  created: string;
}

export interface LocationApiResponse {
  info: Info;
  results: Location[];
}s