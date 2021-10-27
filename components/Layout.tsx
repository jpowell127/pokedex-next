import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container mx-auto max-w-xl pt-8 min-h-screen'>
        {children}
      </main>
    </div>
  );
};

export default Layout;
