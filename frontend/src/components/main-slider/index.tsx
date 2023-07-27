'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import * as Images from '../../assets/main-swiper/index';

export const SliderMain = () => (
  <div className="relative w-full h-full">
    <h1 className="absolute block text-white top-1/2 left-1/2 z-[90] text-[45px] sm:text-[70px]  lg:text-[90px] leading-[100%] font-jost font-bold opacity-50 text-center -translate-y-full lg:-translate-y-1/2 -translate-x-1/2 lg:max-w-[600px] select-none">
      FOUR SEASON'S TRADING
    </h1>
    <Swiper
      slidesPerView={1}
      loop={true}
      effect="fade"
      speed={2000}
      allowTouchMove={false}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[EffectFade, Autoplay]}
    >
      {Object.keys(Images).map((item) => (
        <SwiperSlide>
          <div
            className={`w-full h-screen bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${(Images as any)[item].src})` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
