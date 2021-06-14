// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/';

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";


// Images for slides
import imageLimited from '../images/limited_time_mobile.svg';
import image1 from '../images/sunglasses_box_mobile.png';
import image2 from '../images/waldo_blue_box_mobile.png';
import image3 from '../images/female_model_sunglasses_mobile.png';
import image4 from '../images/male_model_sunglasses_mobile.png';

// install Swiper components
SwiperCore.use([ Pagination ]);

const Slider = () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="bg-grey-waldo"
    >
      <SwiperSlide className="static">
          <img className="absolute top-72 left-16" src={imageLimited} alt="limited time only" />
          <img className="absolute top-40 right-1 transform scale-75" src={image1} alt="waldo blue light glasses" />
      </SwiperSlide>
      <SwiperSlide className="static">
          <img className="absolute top-40 transform scale-75" src={image2} alt="waldo package" />
      </SwiperSlide>
      <SwiperSlide>
          <img src={image3} alt="waldo lady shades" />
      </SwiperSlide>
      <SwiperSlide>
          <img src={image4} alt="waldo guy mens shades" />
      </SwiperSlide>
    </Swiper>
  );
};


export default Slider;