import Link from 'next/link';
import Image from 'next/image';

import { PokemonBasic } from '../types';

const ListCard = ({ pokemon }: { pokemon: PokemonBasic }) => {
  const { index, image, name } = pokemon;
  return (
    <li
      className='border-4 rounded p-4 border-blue-100 my-2 capitalize flex items-center rounded-md bg-gradient-to-b from-gray-700 via-gray-900 to-black'
      key={index}
    >
      <div className='text-lg text-center text-white'>
        <Link href={`/pokemon?id=${index}`}>
          <a>
            <Image src={image} alt={name} width={215} height={215} />
            <span className='font-bold'>{index}. </span>
            <span>{name} </span>
          </a>
        </Link>
      </div>
    </li>
  );
};

export default ListCard;
