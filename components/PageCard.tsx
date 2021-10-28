import Image from 'next/image';
import Link from 'next/link';

import { PokemonDetail } from '../types';

const PageCard = ({ pokemon }: { pokemon: PokemonDetail }) => {
  const { image, name, height, types, weight } = pokemon;
  return (
    <div className='text-white text-center border-4 rounded p-4 border-blue-100 my-2 capitalize rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black'>
      <h1 className='text-4xl mb-2 capitalize'>{name}</h1>
      <Image src={image} alt={name} width={400} height={400} />
      <p>
        <span className='font-bold mr-2'>Weight: </span>
        {weight}
      </p>
      <p>
        <span className='font-bold mr-2'>Height: </span>
        {height}
      </p>
      <h2 className='text-2xl mt-6 mb-2'>Types</h2>
      {types.map(({ type: { name } }, index) => (
        <p key={index}>{name}</p>
      ))}
      <p className='mt-10 text-center'>
        <Link href='/'>
          <a className='text-2xl underline'>Home</a>
        </Link>
      </p>
    </div>
  );
};

export default PageCard;
