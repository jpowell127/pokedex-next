import type { GetServerSideProps } from 'next';

import Layout from '../components/Layout';
import PageCard from '../components/PageCard';

import { PokemonDetail } from '../types';

const { API_URL, IMAGE_HOST } = process.env;

interface PokemonProps {
  pokemon: PokemonDetail;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const { name } = pokemon;
  return (
    <Layout title={name}>
      <PageCard pokemon={pokemon} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const pokemon: PokemonDetail = await res.json();
    const paddedIndex = ('00' + id).slice(-3);
    const image = `${IMAGE_HOST}${paddedIndex}.png`;
    pokemon.image = image;

    return {
      props: {
        pokemon,
      },
    };
  } catch (err) {
    console.log(err);

    return {
      props: {
        pokemon: {},
      },
    };
  }
};
