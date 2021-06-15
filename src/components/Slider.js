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
import sunglassesBoxMobile from '../images/sunglasses_box_mobile.png';
import sunglassesBoxDesktop from '../images/sunglasses_box_desktop.png';
import waldoBlueBoxMobile from '../images/waldo_blue_box_mobile.png';
import waldoBlueBoxDesktop from '../images/waldo_blue_box_desktop.png';
import femaleModelMobile from '../images/female_model_sunglasses_mobile.png';
import femaleModelDesktop from '../images/female_model_sunglasses_desktop.png';
import maleModelMobile from '../images/male_model_sunglasses_mobile.png';
import maleModelDesktop from '../images/male_model_sunglasses_desktop.png';

const imagesList = [
  {
    mobileImage: sunglassesBoxMobile,
    desktopImage: sunglassesBoxDesktop,
    altText: 'waldo blue light glasses',
    mobileItemClass: 'relative top-44 right-1 transform scale-75',
    desktopItemClass: 'relative top-24 right-1 h-auto w-full transform scale-75'
  },
  {
    mobileImage: waldoBlueBoxMobile,
    desktopImage: waldoBlueBoxDesktop,
    altText: 'waldo package',
    mobileItemClass: 'absolute top-40 transform scale-50',
    desktopItemClass: 'absolute top-40 right-8 transform scale-50'
  },
  {
    mobileImage: femaleModelMobile,
    desktopImage: femaleModelDesktop,
    altText: 'waldo female shades',
    mobileItemClass: 'absolute bottom-0',
    desktopItemClass: 'absolute -bottom-10 transform scale-90'
  },
  {
    mobileImage: maleModelMobile,
    desktopImage: maleModelDesktop,
    altText: 'waldo male shades',
    mobileItemClass: 'absolute bottom-0',
    desktopItemClass: 'absolute -bottom-10 transform scale-90'
  }
]

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
  console.log(width);
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
      {
        imagesList.map((item) => {
          return (
            <SwiperSlide>
              <div className="flex justify-center align-base">
                {width < 440 ? (
                  <img src={item.mobileImage} alt={item.altText} className={item.mobileItemClass} />
                ) : (
                  <img src={item.desktopImage} alt={item.altText} className={item.desktopItemClass} />
                )}
              </div>
            </SwiperSlide>
          )
        })
      }
      {/* <SwiperSlide>
        { width < 768 ? ( <img className="absolute top-44 right-1 transform scale-75 lg:block" src={image1} alt="waldo blue light glasses" /> ) : ( <img className=" top-24 right-1 h-auto w-full transform scale-75 lg:block" src={image5} alt="waldo blue light glasses" /> )}
      </SwiperSlide>
      <SwiperSlide>
        { width < 768 ? (<img className="absolute top-40 transform scale-50 " src={image2} alt="waldo package" />) : (<img className="absolute top-40 right-8 transform scale-50 " src={image6} alt="waldo package" />)}
      </SwiperSlide>
      <SwiperSlide>
        { width < 440 ? (<img src={image3} alt="waldo female shades" className="absolute bottom-0" />) : (<img src={image7} alt="waldo female shades" className="absolute -bottom-10 transform scale-90" />)}
      </SwiperSlide>
      <SwiperSlide>
        { width < 440 ? (<img src={image4} alt="waldo male shades" className="absolute bottom-0" />) : (<img src={image8} alt="waldo male shades" className="absolute -bottom-10 transform scale-90 " />)}
      </SwiperSlide> */}
    </Swiper>
  );
};


export default Slider;