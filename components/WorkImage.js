import Image from 'next/image'
import Link from 'next/link'

import { showImage } from '../lib/helper'

const WorkImage = ({ data: { id, slug, name, orientation, image: { url } } }) => (
  <div>
    <Link key={id} href={`/work/${slug}`}>
      <a>
        <div className={ orientation === 'landscape' ? 'aspect-w-16 aspect-h-9' : 'aspect-w-4 aspect-h-6'}>
          <Image className="object-cover" src={showImage(url)} alt={showImage(url)} layout="fill" />
        </div>
        <h6 className="mt-4 text-lg font-semibold text-right text-black font-montserrat">{name}</h6>
      </a>
    </Link>
  </div>
);

export default WorkImage;