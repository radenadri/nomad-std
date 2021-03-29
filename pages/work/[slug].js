import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import Head from 'next/head'
import Image from 'next/image'

import Fade from 'react-reveal/Fade'

import Main from '../../components/layouts/Main'

import Carousel from '../../components/Carousel'
import Gallery from '../../components/Gallery'
import Navbar from '../../components/partials/Navbar'
import Footer from '../../components/partials/Footer'

import { getWorks, getWorkWithSlug } from '../../lib/api'
import { showImage, markdownToHtml } from '../../lib/helper'

const WorkDetail = ({ works }) => {

  const router = useRouter()
  if (!router.isFallback && !works?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (

    <>
      <Navbar />

      <main className="max-w-screen-lg mx-auto mt-6 md:mt-12">
        <div className="w-10/12 mx-auto">

          <Head>
            <title>Nomad | {works?.name}</title>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Head>

          { router.isFallback ? (
            <h1 className="mb-12 text-3xl font-bold leading-tight tracking-tighter text-center md:leading-none md:text-left">
              Loading
            </h1>
          ) : ( 
            <>
              <div>
                <Fade bottom>
                  <h1 className="text-3xl font-bold text-center lowercase md:leading-normal lg:leading-tight md:text-5xl lg:text-6xl font-montserrat">{works?.name}</h1>
                </Fade>
                <Fade bottom>
                  <p className="w-full mx-auto mt-4 text-xl text-center md:mt-8 md:w-8/12">{works?.short_description}</p>
                </Fade>
              </div>

              <div className="mt-10">
                <Fade bottom>
                  <div className="w-full aspect-w-16 aspect-h-9">
                    <Image className="object-cover" src={showImage(works?.image.url)} alt={showImage(works?.image.url)} layout="fill" />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="max-w-3xl mx-auto mt-10 text-xl text-black md:mt-10 long-description" dangerouslySetInnerHTML={{ __html: works?.content }}></div>
                </Fade>
              </div>

              <Carousel carousel={works?.carousel} />
              <Gallery gallery={works?.gallery} />
            </>
          )}
          
        </div>
      </main>

      <Footer />
      
    </>
  )
}

export async function getStaticProps({ params }) {
  console.log({ params });
  const data = await getWorks(params.slug)
  const content = await markdownToHtml(data?.works[0]?.long_description || '')

  return {
    props: {
      works: {
        ...data?.works[0],
        content
      }
    },
  } 
}

export async function getStaticPaths() {
  const works = await getWorkWithSlug()

  return {
    paths: works?.map((work) => `/work/${work.slug}`) || [],
    fallback: true,
  }
}

export default WorkDetail;