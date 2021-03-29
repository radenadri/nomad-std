import Navbar from '../partials/Navbar'
import Footer from '../partials/Footer'

const Main = ({ children, isFull, aboutCarousel, aboutGallery }) => (
  <>
    <Navbar />

    <main className="max-w-screen-lg mx-auto mt-6 md:mt-12">
      <div className={`${isFull ? 'w-full px-8' : 'w-10/12'} mx-auto`}>

        {children}
        
      </div>
    </main>
    
    { aboutCarousel }
    { aboutGallery }

    <Footer />
    
  </>
)

export default Main;