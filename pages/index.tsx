import React from 'react';
import Head from 'next/head';

import Hero from '../components/Hero';
import CreateTodo from '../components/CreateTodo';
import Todos from '../components/Todos';

const Home = () => {
  return (
    <>
      <Head>
        <title>Todos app</title>
        <meta name="description" content="A small little TS todos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Todos />
      <CreateTodo />
    </>
  );
};

export default Home;
