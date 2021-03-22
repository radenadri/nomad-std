import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleOpenMenu = () => setIsOpen(!isOpen)
  
  return (
    <header className="max-w-screen-lg mx-auto">
      <div className={`flex items-center justify-between px-4 ${ isOpen ? 'pt-8' : 'py-8' }`}>
        <Image
          src="/nomad-logo.png"
          alt="Nomad Logo"
          width="199"
          height="51"
          className="w-full h-auto"
        />
  
        <button onClick={handleOpenMenu} className="block p-4 focus:outline-none md:hidden">
          { isOpen ?
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            :
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
          }
        </button>
  
        <nav className="hidden md:flex">
          <Link href="/">
            <a className="px-4 text-lg font-bold text-black font-montserrat">work</a>
          </Link>
          <Link href="/about">
            <a className="px-4 text-lg font-bold text-black font-montserrat">about</a>
          </Link>
          <Link href="/">
            <a className="px-4 text-lg font-bold text-black font-montserrat">say hello 👋</a>
          </Link>
        </nav>

      </div>
      <div className={`${ isOpen ? 'flex' : 'hidden' } flex-col p-4 bg-white md:hidden`}>
        <Link href="/">
          <a className="py-2 text-lg font-bold text-black font-montserrat">work</a>
        </Link>
        <Link href="/about">
          <a className="py-2 text-lg font-bold text-black font-montserrat">about</a>
        </Link>
        <Link href="/">
          <a className="py-2 text-lg font-bold text-black font-montserrat">say hello 👋</a>
        </Link>
      </div>
  
    </header>
  )
}

export default Navbar;