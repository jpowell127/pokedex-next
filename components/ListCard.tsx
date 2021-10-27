import Link from 'next/link';
import Image from 'next/image';

interface Pokemon {
  name: string;
  url: string;
  image: string;
}

const ListCard = ({ pokemon, index }: { pokemon: Pokemon; index: number }) => (
  <li
    className='border-4 rounded p-4 border-blue-300 my-2 capitalize flex items-center text-lg text-center bg-white rounded-md'
    key={index}
  >
    <Link href={`/pokemon?id=${index + 1}`}>
      <a>
        <div className='w-100 h-100'>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={215}
            height={215}
          />
        </div>
        <span className='font-bold'>{index + 1}. </span>
        <span>{pokemon.name} </span>
      </a>
    </Link>
  </li>
);

export default ListCard;
