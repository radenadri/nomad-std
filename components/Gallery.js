import GalleryItem from './GalleryItem'

import Fade from 'react-reveal/Fade'

const Gallery = ({ gallery }) => (
  <Fade bottom>
    <div className="max-w-screen-lg mx-auto mt-10 md:mt-12">
      <div className="w-10/12 mx-auto">

        <div className="grid grid-cols-1 gap-4 mt-10 md:gap-6 md:grid-cols-2 md:mt-12">
          {
            gallery.map(pic => <GalleryItem key={pic.id} {...pic} />)
          }
        </div>
        
      </div>
    </div>
  </Fade>
)

export default Gallery