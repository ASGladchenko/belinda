'use client';
import { useLocaleText } from '@/locale';
import { useInView } from 'react-intersection-observer';

import { getStyles } from './style';
import About from '../../assets/about-us/about.png';

export const AboutUs = () => {
  const text = useLocaleText('aboutClient');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });
  const { contentBlock, title, content, img } = getStyles(inView);
  console.log(inView);

  return (
    <section id="aboutUs">
      <div className="container flex ">
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
