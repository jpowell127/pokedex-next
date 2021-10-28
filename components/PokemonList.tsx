import ListCard from './ListCard';

import { PokemonBasic } from '../types';

const PokemonList = ({ pokemonList }: { pokemonList: Array<PokemonBasic> }) => {
  return (
    <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
      {pokemonList.map(pokemon => (
        <ListCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};

export default PokemonList;
