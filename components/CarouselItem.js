import Image from 'next/image'

import { showImage } from '../lib/helper'

const CarouselItem = ({ url }) => (
  <div className="w-full aspect-w-1 aspect-h-1">
    <Image className="object-cover" src={showImage(url)} alt={showImage(url)} layout="fill" />
  </div>
)

export default CarouselItem