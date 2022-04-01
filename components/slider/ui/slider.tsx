import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import { Icons } from '../../icons';
import { useEffect, useState } from 'react';

interface IProps {
  countries: string[];
}

export const Slider: React.FC<IProps> = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [country, setCountry] = useState('');

  const renderSlide = (country: string, index: number) => {
    return <SwiperSlide key={index}>{country}</SwiperSlide>;
  };

  useEffect(() => {
    setCountry(countries[currentCountry]);
  }, [countries, currentCountry]);

  return (
    <div className='slider-wrapper'>
      <Icons
        name='prew-arrow'
        className='prew-arrow'
        onClick={() => {
          setCurrentCountry((prevState) =>
            prevState <= 0 ? countries.length - 1 : prevState - 1
          );
        }}
      />
      <>
        <h1 className='slider__title'>{country}</h1>
        <Swiper
          navigation={{
            nextEl: '.next-arrow',
            prevEl: '.prew-arrow',
          }}
          modules={[Navigation]}
          spaceBetween={28}
          centeredSlides
          loop
          allowTouchMove={false}
          loopedSlides={18}
          slidesPerView={'auto'}
        >
          {countries.map(renderSlide)}
        </Swiper>
        <hr className='slider__line' />
      </>
      <Icons
        name='next-arrow'
        className='next-arrow'
        onClick={() => {
          setCurrentCountry((prevState) =>
            prevState < countries.length - 1 ? prevState + 1 : 0
          );
        }}
      />
    </div>
  );
};
