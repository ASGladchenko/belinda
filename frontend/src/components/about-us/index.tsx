import { useInView } from 'react-intersection-observer';

import About from '@/assets/about-us/about.png';

import { IAboutUs } from './types';
import { getStyles } from './style';

export const AboutUs = (props: IAboutUs) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { contentBlock, title, content, img } = getStyles(inView);

  return (
    <section id="aboutUs" className="py-[20px] md:py-[50px]">
      <div className="container flex lg:min-h-[436px]">
        <div ref={ref} className={contentBlock}>
          <h1 className={title}>{props.title}</h1>

          <p className={content}>{props.information}</p>
        </div>

        <div className={img} style={{ backgroundImage: `url(${About.src})` }} />
      </div>
    </section>
  );
};
