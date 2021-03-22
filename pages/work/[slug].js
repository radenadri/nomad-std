import Head from 'next/head'
import Image from 'next/image'
import Slider from 'react-slick'

import Navbar from '../../components/partials/Navbar'
import Footer from '../../components/partials/Footer'

import { useRouter } from 'next/router'

import Main from '../../components/layouts/Main'

const WorkDetail = () => {
  const router = useRouter()
  const { slug } = router.query;

  const slickSettings = {
    arrows: false,
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipesToSlide: true,
    responsive: [
      {
        breakpoint: 577,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 426,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <>
    <Navbar />

    <main>
      <div className="max-w-screen-lg mx-auto mt-6 md:mt-12">
        <div className="w-10/12 mx-auto">

          <Head>
            <title>Nomad | {slug}</title>
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          </Head>

          <div>
            <h1 className="text-3xl font-bold text-center md:leading-normal lg:leading-tight md:text-5xl lg:text-6xl font-montserrat">irina syekh // haria duna</h1>
            <p className="w-full mx-auto mt-4 text-xl text-center md:mt-8 md:w-8/12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tempus mauris, eget venenatis orci mollis vel. Quisque dui lorem.
            </p>
          </div>

          <div className="mt-10">
            <div className="w-full aspect-w-16 aspect-h-9">
              <Image className="object-cover" src="/details/1.jpg" alt="/details/1.jpg" layout="fill" />
            </div>
            <p className="max-w-3xl mx-auto mt-10 text-xl text-black md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tempus mauris, eget venenatis orci mollis vel. Quisque dui lorem.
            </p>
          </div>
          
        </div>
      </div>
      <div className="mt-10">
        <Slider {...slickSettings}>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src="/details/2.jpg" alt="/details/2.jpg" layout="fill" />
          </div>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src="/details/3.jpg" alt="/details/3.jpg" layout="fill" />
          </div>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src="/details/4.jpg" alt="/details/4.jpg" layout="fill" />
          </div>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src="/details/2.jpg" alt="/details/2.jpg" layout="fill" />
          </div>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src="/details/3.jpg" alt="/details/3.jpg" layout="fill" />
          </div>
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src="/details/4.jpg" alt="/details/4.jpg" layout="fill" />
          </div>
        </Slider>
      </div>
      <div className="max-w-screen-lg mx-auto mt-10 md:mt-12">
        <div className="w-10/12 mx-auto">

          <div className="grid grid-cols-1 gap-4 mt-10 md:gap-6 md:grid-cols-2 md:mt-12">
            <div>
              <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
                <Image className="object-cover" src="/details/5.jpg" alt="/details/5.jpg" layout="fill" />
              </div>
            </div>
            <div>
              <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
                <Image className="object-cover" src="/details/6.jpg" alt="/details/6.jpg" layout="fill" />
              </div>
            </div>
            <div>
              <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
                <Image className="object-cover" src="/details/7.jpg" alt="/details/7.jpg" layout="fill" />
              </div>
            </div>
            <div>
              <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
                <Image className="object-cover" src="/details/8.jpg" alt="/details/8.jpg" layout="fill" />
              </div>
            </div>
            <div>
              <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
                <Image className="object-cover" src="/details/9.jpg" alt="/details/9.jpg" layout="fill" />
              </div>
            </div>
            <div>
              <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
                <Image className="object-cover" src="/details/10.jpg" alt="/details/10.jpg" layout="fill" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>

    <Footer />
    
  </>
  )
};

export default WorkDetail;