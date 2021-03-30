import '../styles/globals.css'

import SimpleReactLightbox from 'simple-react-lightbox'

const MyApp = ({ Component, pageProps }) => {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
