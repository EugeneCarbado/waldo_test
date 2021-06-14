// Import Swiper React components
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../node_modules/swiper/';
import '../styles.css';
import { useState, useEffect } from 'react';

// Import Swiper styles
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css";



// Images for slides
import image1 from '../images/sunglasses_box_mobile.png';
import image2 from '../images/waldo_blue_box_mobile.png';
import image3 from '../images/female_model_sunglasses_mobile.png';
import image4 from '../images/male_model_sunglasses_mobile.png';
import image5 from '../images/sunglasses_box_desktop.png';
import image6 from '../images/waldo_blue_box_desktop.png';
import image7 from '../images/female_model_sunglasses_desktop.png';
import image8 from '../images/male_model_sunglasses_desktop.png';

// install Swiper components
SwiperCore.use([ Pagination, Autoplay ]);

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Slider = () => {
  const { width } = useWindowDimensions();
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="bg-grey-waldo"
    >
      <SwiperSlide>
        { width < 768 ? ( <img className="absolute top-44 right-1 transform scale-75 lg:block" src={image1} alt="waldo blue light glasses" /> ) : ( <img className="absolute top-24 right-1 transform scale-75 lg:block" src={image5} alt="waldo blue light glasses" /> )}
      </SwiperSlide>
      <SwiperSlide>
        { width < 768 ? (<img className="absolute top-40 transform scale-50 " src={image2} alt="waldo package" />) : (<img className="absolute top-40 right-8 transform scale-50 " src={image6} alt="waldo package" />)}
      </SwiperSlide>
      <SwiperSlide>
        { width < 440 ? (<img src={image3} alt="waldo female shades" className="absolute bottom-0" />) : (<img src={image7} alt="waldo female shades" className="absolute -bottom-10 transform scale-90" />)}
      </SwiperSlide>
      <SwiperSlide>
        { width < 440 ? (<img src={image4} alt="waldo male shades" className="absolute bottom-0" />) : (<img src={image8} alt="waldo male shades" className="absolute -bottom-10 transform scale-90 " />)}
      </SwiperSlide>
    </Swiper>
  );
};


export default Slider;