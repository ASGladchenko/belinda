'use client';
import { useLocaleText } from '@/locale';
import { useInView } from 'react-intersection-observer';

import About from '@/assets/about-us/about.png';

import { getStyles } from './style';

export const AboutUs = () => {
  const text = useLocaleText('aboutClient');
  const { ref, inView } = useInView({
    // triggerOnce: true,
    threshold: 0.4,
  });
  const { contentBlock, title, content, img } = getStyles(inView);

  return (
    <section id="aboutUs" className="py-[20px] md:py-[50px]">
      <div className="container flex lg:min-h-[436px]">
        <div ref={ref} className={contentBlock}>
          <h1 className={title}>{text.title}</h1>

          <p className={content}>{text.information}</p>
        </div>

        <div
          className={img}
          style={{ backgroundImage: `url(${About.src})` }}
        ></div>
      </div>
    </section>
  );
};
