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
import imageLimited2 from '../images/limited_desktop.svg';
import image5 from '../images/sunglasses_box_desktop.png';
import image6 from '../images/waldo_blue_box_desktop.png';
import image7 from '../images/female_model_sunglasses_desktop.png';
import image8 from '../images/male_model_sunglasses_desktop.png';

// install Swiper components
SwiperCore.use([ Pagination ]);

const Slider = () => {
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="bg-grey-waldo md:w-3/4 md:h-1/2"
    >
      <SwiperSlide className="static md:w-20 md:h-20">
          <img className="absolute top-72 left-16" src={imageLimited} alt="limited time only" />
          <img className="absolute top-40 right-1 transform scale-75" src={image5} alt="waldo blue light glasses" />
      </SwiperSlide>
      <SwiperSlide className="static">
          <img className="absolute top-40 transform scale-75" src={image6} alt="waldo package" />
      </SwiperSlide>
      <SwiperSlide className="">
          <img src={image7} alt="waldo lady shades" />
      </SwiperSlide>
      <SwiperSlide>
          <img src={image8} alt="waldo guy mens shades" className="absolute top-32 transform scale-110" />
      </SwiperSlide>
    </Swiper>
  );
};


export default Slider;