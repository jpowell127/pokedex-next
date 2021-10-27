import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title='Pokedex Next'>
      <h1 className='text-4xl mb-8 text-center'>Pokedex Next</h1>
    </Layout>
  );
};

export default Home;
