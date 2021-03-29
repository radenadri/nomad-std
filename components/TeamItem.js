import Image from 'next/image'

import { showImage } from '../lib/helper'

const TeamItem = ({ name, image: { url }, role }) => (
  <div>
    <div className="w-full aspect-w-5 aspect-h-6">
      <Image className="object-cover" src={showImage(url)} alt={showImage(url)} layout="fill" />
    </div>
    <h6 className="mt-4 text-lg font-bold text-black uppercase font-montserrat">{name}</h6>
    <span className="text-sm text-gray-400">{role}</span>
  </div>
)

export default TeamItem