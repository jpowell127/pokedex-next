import type { GetStaticProps } from 'next';
import { useState } from 'react';

import Layout from '../components/Layout';
import PokemonList from '../components/PokemonList';
import SearchInput from '../components/SearchInput';

import { PokemonBasic, PokemonDateResponse } from '../types';

interface PokemonData {
  results: Array<PokemonDateResponse>;
}

interface HomeProps {
  pokemons: Array<PokemonBasic>;
}

const { API_URL, API_LIMIT, IMAGE_HOST } = process.env;

export default function Home({ pokemons }: HomeProps) {
  const [searchValue, setSearchValue] = useState('');
  const [pokemonList, setPokemonList] = useState<Array<PokemonBasic>>(pokemons);

  const updateInput = async (input: string) => {
    const filtered: Array<PokemonBasic> = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(input.toLowerCase()),
    );
    setSearchValue(input);
    setPokemonList(filtered);
  };

  return (
    <Layout title='Pokedex Next'>
      <SearchInput value={searchValue} onChange={updateInput} />
      <PokemonList pokemonList={pokemonList} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  try {
    const res = await fetch(`${API_URL}?limit=${API_LIMIT}`);
    const { results }: PokemonData = await res.json();

    const pokemons = results.map((result, i) => {
      const index = i + 1;
      const paddedIndex = ('00' + index).slice(-3);
      const image = `${IMAGE_HOST}${paddedIndex}.png`;
      return { ...result, image, index };
    });

    return {
      props: {
        pokemons,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        pokemons: [],
      },
    };
  }
};
