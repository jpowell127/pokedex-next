export interface PokemonDateResponse {
  name: string;
  url: string;
}

export interface PokemonBasic {
  index: number;
  image: string;
  name: string;
  url: string;
}

export interface PokemonDetail {
  index: number;
  image: string;
  name: string;
  height: number;
  id: number;
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  weight: number;
}
