import Head from 'next/head'
import Image from 'next/image'

import Main from '../components/layouts/Main'

const About = () => (
  <Main isFull>

    <Head>
      <title>Nomad | Who are we</title>
    </Head>

    <h1 className="text-3xl font-bold md:leading-normal lg:leading-tight md:text-5xl lg:text-6xl font-montserrat">we are awesome wedding documentation based in bandung</h1>

    <div className="flex flex-col mt-8 md:mt-16 lg:mt-20">
      <div className="w-full aspect-w-16 aspect-h-9">
        <Image className="object-cover" src="/about/1.jpg" alt="/about/1.jpg" layout="fill" />
      </div>
      <div className="w-full mx-auto mt-8 md:mt-16 lg:mt-20 md:w-8/12">
        <p className="text-xl text-black md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tempus mauris, eget venenatis orci mollis vel. Quisque dui lorem, fermentum non cursus id, interdum at enim. Sed mi risus, lobortis sit amet sagittis vitae, pharetra ac quam.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-8 mt-16 md:gap-24 md:flex-row lg:mt-20">
      <div className="w-full md:w-6/12">
        <h4 class="font-montserrat text-3xl font-bold text-black">
          We’d love to serve you a good memories and blessing every moment with cherish and happiness
        </h4>
      </div>
      <div className="w-full md:w-6/12">
        <p className="text-xl text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tempus mauris, eget venenatis orci mollis vel. 
        </p>
        <p className="mt-4 text-xl text-black">
          Quisque dui lorem, fermentum non cursus id, interdum at enim. Sed mi risus, lobortis sit amet sagittis vitae, pharetra ac quam.
        </p>
      </div>
    </div>

    <div className="flex flex-col gap-8 mt-16 md:gap-24 md:flex-row lg:mt-20">
      <div className="w-full md:w-7/12">
        <div className="w-full aspect-w-1 aspect-h-1">
          <Image className="object-cover" src="/about/2.jpg" alt="/about/2.jpg" layout="fill" />
        </div>
      </div>
      <div className="w-full md:w-5/12">
        <h4 class="font-montserrat text-3xl font-bold text-black">
          Care and focus only on your greatness
        </h4>
        <div className="mt-4">
          <p className="text-xl text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tempus mauris, eget venenatis orci mollis vel.
          </p>
          <p className="mt-4 text-xl text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis viverra tempus mauris, eget venenatis orci mollis vel.
          </p>
          <p className="mt-4 text-xl text-black">
            Lets make <a className="text-blue-600 hover:underline" href="#">your dream come true</a>
          </p>
        </div>
      </div>
    </div>

    <div class="mt-16 md:gap-24 lg:mt-20">
      <h4 class="font-montserrat text-3xl font-bold text-black text-center">
        The nomad people
      </h4>
      <p className="max-w-md mx-auto mt-4 text-xl text-center text-black">
        The problem solvers, creative thinker, hardworker, and pure passionate people
      </p>
      <div className="grid grid-cols-2 mt-12 md:grid-cols-3 gap-x-6 gap-y-12">
        <div>
          <div className="w-full aspect-w-5 aspect-h-6">
            <Image className="object-cover" src="/about/3.jpg" alt="/about/3.jpg" layout="fill" />
          </div>
          <h6 className="mt-4 text-lg font-bold text-black font-montserrat">farhan ms</h6>
          <span className="text-sm text-gray-400">video editor // photographer</span>
        </div>
        <div>
          <div className="w-full aspect-w-5 aspect-h-6">
            <Image className="object-cover" src="/about/3.jpg" alt="/about/3.jpg" layout="fill" />
          </div>
          <h6 className="mt-4 text-lg font-bold text-black font-montserrat">farhan ms</h6>
          <span className="text-sm text-gray-400">video editor // photographer</span>
        </div>
        <div>
          <div className="w-full aspect-w-5 aspect-h-6">
            <Image className="object-cover" src="/about/3.jpg" alt="/about/3.jpg" layout="fill" />
          </div>
          <h6 className="mt-4 text-lg font-bold text-black font-montserrat">farhan ms</h6>
          <span className="text-sm text-gray-400">video editor // photographer</span>
        </div>
        <div>
          <div className="w-full aspect-w-5 aspect-h-6">
            <Image className="object-cover" src="/about/3.jpg" alt="/about/3.jpg" layout="fill" />
          </div>
          <h6 className="mt-4 text-lg font-bold text-black font-montserrat">farhan ms</h6>
          <span className="text-sm text-gray-400">video editor // photographer</span>
        </div>
        <div>
          <div className="w-full aspect-w-5 aspect-h-6">
            <Image className="object-cover" src="/about/3.jpg" alt="/about/3.jpg" layout="fill" />
          </div>
          <h6 className="mt-4 text-lg font-bold text-black font-montserrat">farhan ms</h6>
          <span className="text-sm text-gray-400">video editor // photographer</span>
        </div>
        <div>
          <div className="w-full aspect-w-5 aspect-h-6">
            <Image className="object-cover" src="/about/3.jpg" alt="/about/3.jpg" layout="fill" />
          </div>
          <h6 className="mt-4 text-lg font-bold text-black font-montserrat">farhan ms</h6>
          <span className="text-sm text-gray-400">video editor // photographer</span>
        </div>
      </div>
    </div>

  </Main>
);

export default About;