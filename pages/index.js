import Head from 'next/head'

import { Masonry } from "masonic"

import Main from '../components/layouts/Main'
import WorkImage from '../components/WorkImage'

import { getAllWorks } from '../lib/api'

const Home = ({ allWorks }) => (
  <Main>
    
    <Head>
      <title>Nomad | Homepage</title>
    </Head>

    <Masonry
      items={allWorks}
      columnGutter={60}
      columnWidth={300}
      overscanBy={2}
      render={WorkImage}
    />
      
  </Main>
)

export async function getStaticProps() {
  const allWorks = await getAllWorks()

  return {
    props: { allWorks },
  }
}

export default Home;