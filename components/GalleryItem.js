import Image from 'next/image'

import { showImage } from '../lib/helper'

const GalleryItem = ({ url }) => (
  <div>
    <div className="w-full cursor-pointer aspect-w-16 aspect-h-9">
      <Image className="object-cover" src={showImage(url)} alt={showImage(url)} layout="fill" />
    </div>
  </div>
)

export default GalleryItem