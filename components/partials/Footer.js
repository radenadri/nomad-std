import Link from 'next/link'

const Footer = () => (
  <footer className="max-w-screen-lg py-6 mx-auto">
    <nav className="flex justify-center px-4 py-2">
      <Link href="#" target="_blank">
        <a className="px-4 text-lg font-bold text-black font-montserrat">youtube</a>
      </Link>
      <Link href="https://www.instagram.com/nomad.std">
        <a className="px-4 text-lg font-bold text-black font-montserrat" target="_blank">instagram</a>
      </Link>
      <Link href="https://wa.me/+62895333746615?text=Halo%252C%2520saya%2520tertarik%2520dengan%2520jasa%2520foto%2520dan%2520videonya.">
        <a className="px-4 text-lg font-bold text-black font-montserrat" target="_blank">whatsapp</a>
      </Link>
    </nav>
    <span className="block py-2 text-center">© 2021 nomad</span>
  </footer>
)

export default Footer;