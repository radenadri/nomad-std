import Link from 'next/link'

const Footer = () => (
  <footer className="max-w-screen-lg py-6 mx-auto">
    <nav className="flex justify-center px-4 py-2">
      <Link href="/">
        <a className="px-4 text-lg font-bold text-black font-montserrat">youtube</a>
      </Link>
      <Link href="/">
        <a className="px-4 text-lg font-bold text-black font-montserrat">instagram</a>
      </Link>
    </nav>
    <span className="block py-2 text-center">© 2021 nomad</span>
  </footer>
)

export default Footer;