import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/Layout';
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
      <ul>
        {pokemons.map((pokeman, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className='border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200 rounded-md'>
                <div className='w-20 h-20 mr-3'>
                  <Image
                    src={pokeman.image}
                    alt={pokeman.name}
                    width={80}
                    height={80}
                  />
                </div>
                <span className='mr-2 font-bold'>{index + 1}.</span>
                {pokeman.name}
              </a>
            </Link>
          </li>
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
