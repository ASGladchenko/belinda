'use client';
import { useLocaleText } from '@/locale';

import bg from '@/assets/advantages/bgblur.jpg';

import { AdvantagesCard } from './advantages-card';
import { AnimationBlock } from '../animation-block';

export const Advantages = () => {
  const advantageBlock = useLocaleText('advantagesClient');
  const advantages = Object.values(advantageBlock).slice(1);

  return (
    <section
      className="py-[60px] bg-cover relative z-10"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container text-white ">
        <h3 className="text-center uppercase text-[32px] font-bold mb-2 leading-[100%]">
          {advantageBlock.title}
        </h3>
        <div className="flex flex-wrap justify-center ">
          {advantages.map((advantage, index) => (
            <AnimationBlock
              key={`advantage-card-${index}`}
              animation="animate-left-appearance-md"
              styles=" w-full md:max-w-[50%] opacity-0"
            >
              <AdvantagesCard index={index} advantage={advantage} />
            </AnimationBlock>
          ))}
        </div>
      </div>
    </section>
  );
};
