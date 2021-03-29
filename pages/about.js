import Head from 'next/head'
import Image from 'next/image'

import Main from '../components/layouts/Main'
import Team from '../components/Team'

import { getAboutData } from '../lib/api'
import { markdownToHtml, showImage } from '../lib/helper'

const About = ({ about: { rightCtaValue, rightValue, setting, teams } }) => {
  
  return (
    <Main isFull>

      <Head>
        <title>Nomad | Who are we</title>
      </Head>

      <h1 className="text-3xl font-bold lowercase md:leading-normal lg:leading-tight md:text-5xl lg:text-6xl font-montserrat">{setting.who_we_are}</h1>

      <div className="flex flex-col mt-8 md:mt-16 lg:mt-20">
        <div className="w-full aspect-w-16 aspect-h-9">
          <Image className="object-cover" src={showImage(setting.image.url)} alt={showImage(setting.image.url)} layout="fill" />
        </div>
        <div className="w-full mx-auto mt-8 md:mt-16 lg:mt-20 md:w-8/12">
          <p className="text-xl text-black lowercase md:text-2xl">
            {setting.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-16 md:gap-24 md:flex-row lg:mt-20">
        <div className="w-full md:w-6/12">
          <h4 className="text-3xl font-bold text-black font-montserrat">
            {setting.left_value}
          </h4>
        </div>
        <div className="w-full text-xl text-black right-value md:w-6/12" dangerouslySetInnerHTML={{ __html: rightValue }}></div>
      </div>

      <div className="flex flex-col gap-8 mt-16 md:gap-24 md:flex-row lg:mt-20">
        <div className="w-full md:w-7/12">
          <div className="w-full aspect-w-1 aspect-h-1">
            <Image className="object-cover" src={showImage(setting.left_cta_value.url)} alt={showImage(setting.left_cta_value.url)} layout="fill" />
          </div>
        </div>
        <div className="w-full right-cta-value md:w-5/12" dangerouslySetInnerHTML={{ __html: rightCtaValue }}></div>
      </div>

      <Team {...{teams}} />

    </Main>
  )
};

export async function getStaticProps() {
  const aboutData = await getAboutData()
  const rightValue = await markdownToHtml(aboutData?.setting?.right_value || '')
  const rightCtaValue = await markdownToHtml(aboutData?.setting?.right_cta_value || '')

  return {
    props: { 
      about: {
        ...aboutData,
        rightValue,
        rightCtaValue
      }
    }
  }
}

export default About;