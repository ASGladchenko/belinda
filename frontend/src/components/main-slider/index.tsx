'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import * as Images from '../../assets/main-swiper/index';

import { getStyles } from './style';

export const SliderMain = () => {
  const { wrapper, title, card } = getStyles();

  return (
    <section className={wrapper}>
      <h1 className={title}>FOUR SEASON'S TRADING</h1>

      <Swiper
        loop={true}
        speed={2000}
        effect="fade"
        slidesPerView={1}
        allowTouchMove={false}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {Object.keys(Images).map((item, index) => (
          <SwiperSlide key={item + index}>
            <div
              className={card}
              style={{ backgroundImage: `url(${(Images as any)[item].src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
