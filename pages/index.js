import Head from 'next/head'

import { Masonry } from "masonic"

import Main from '../components/layouts/Main'
import WorkImage from '../components/WorkImage'

const Home = () => {

  const works = [
    {
      id: 1,
      slug: 'irina-syekh-haria-duna',
      src: '/homepage/1.jpg',
      type: 'portrait',
      name: 'irina syekh // haria duna'
    },
    {
      id: 2,
      slug: 'irina-syekh-haria-duna',
      src: '/homepage/2.jpg',
      type: 'landscape',
      name: 'valencia // samuel edward'
    },
    {
      id: 3,
      slug: 'irina-syekh-haria-duna',
      src: '/homepage/3.jpg',
      type: 'landscape',
      name: 'irina syekh // haria duna'
    },
    {
      id: 4,
      slug: 'irina-syekh-haria-duna',
      src: '/homepage/4.jpg',
      type: 'portrait',
      name: 'valencia // samuel edward'
    },
    {
      id: 5,
      slug: 'irina-syekh-haria-duna',
      src: '/homepage/5.jpg',
      type: 'portrait',
      name: 'irina syekh // haria duna'
    },
    {
      id: 6,
      slug: 'irina-syekh-haria-duna',
      src: '/homepage/6.jpg',
      type: 'portrait',
      name: 'valencia // samuel edward'
    },
    {
      id: 7,
      src: '/homepage/3.jpg',
      type: 'landscape',
      name: 'irina syekh // haria duna'
    },
  ];

  return (
    <Main>
      
      <Head>
        <title>Nomad | Homepage</title>
      </Head>

      <Masonry
          items={works}
          columnGutter={60}
          columnWidth={300}
          overscanBy={2}
          render={WorkImage}
        />
        
    </Main>
  )
}

export default Home;