// store/types.ts

// Información de paginación
export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

// Tipo de Objeto Característica (Origen o Ubicación)
export interface CharacterDetail {
  name: string;
  url: string;
}

// Tipo de Personaje
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: CharacterDetail;
  location: CharacterDetail;
  image: string; // URL de la imagen del personaje
  episode: string[];
  url: string;
  created: string;
}

// Estructura de la Respuesta de la API para Personajes
export interface CharacterApiResponse {
  info: Info;
  results: Character[];
}