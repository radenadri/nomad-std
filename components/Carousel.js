import Slider from 'react-slick'

import { SRLWrapper } from 'simple-react-lightbox'

import Fade from 'react-reveal/Fade'

import CarouselItem from './CarouselItem'

const Carousel = ({ carousel }) => {

  const slickSettings = {
    arrows: false,
    centerMode: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipesToSlide: true,
    responsive: [
      {
        breakpoint: 577,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 426,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const options = {
    caption: {
      showCaption: false
    }
  }

  return (
    <Fade bottom>
      <div className="mt-10">
        <SRLWrapper options={options}>
          <Slider {...slickSettings}>
            {
              carousel.map(pic => <CarouselItem key={pic.id} {...pic} />)
            }
          </Slider>
        </SRLWrapper>
      </div>
    </Fade>
  )
}

export default Carousel