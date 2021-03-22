import Image from 'next/image'
import Link from 'next/link'

const WorkImage = ({ data: { id, slug, name, src, type } }) => (
  <Link key={id} href={`/work/${slug}`}>
    <a>
      <div className={ type === 'landscape' ? 'aspect-w-16 aspect-h-9' : 'aspect-w-4 aspect-h-6'}>
        <Image className="object-cover" src={src} alt={src} layout="fill" />
      </div>
      <h6 className="mt-4 text-lg font-semibold text-right text-black font-montserrat">{name}</h6>
    </a>
  </Link>
);

export default WorkImage;