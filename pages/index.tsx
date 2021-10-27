import type { GetStaticProps } from 'next';

import Layout from '../components/Layout';
import ListCard from '../components/ListCard';
interface PokemonData {
  results: Array<{ name: string; url: string }>;
}

interface HomeProps {
  pokemons: Array<{ name: string; url: string; image: string }>;
}

const { API_URL, API_LIMIT, IMAGE_HOST } = process.env;

export default function Home({ pokemons }: HomeProps) {
  return (
    <Layout title='Pokedex Next'>
      <h1 className='text-4xl mb-8 text-center'>Pokedex Next</h1>
      <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {pokemons.map((pokemon, index) => (
          <ListCard key={pokemon.name} pokemon={pokemon} index={index} />
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  try {
    const res = await fetch(`${API_URL}?limit=${API_LIMIT}`);
    const { results }: PokemonData = await res.json();
    const pokemons = results.map((result, index) => {
      const paddedIndex = ('00' + (index + 1)).slice(-3);
      const image = `${IMAGE_HOST}${paddedIndex}.png`;
      return { ...result, image };
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
