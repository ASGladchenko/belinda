import { useLocaleText } from '@/locale';

import * as HeadImgs from '@/assets/main-swiper';
import MainImg from '@/assets/offer/bgblur2.jpg';

import { AnimationBlock } from '../animation-block';
import { AdvantagesCard } from '../advantages/advantages-card';

export const Offer = () => {
  const offersBlock = useLocaleText('offerClient');
  const offers = Object.values(offersBlock).slice(1);

  return (
    <section id="offered_you">
      <div
        className="h-[200px] w-full bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${HeadImgs.fruit.src})` }}
      >
        <AnimationBlock
          styles="opacity-0 w-full"
          animation="animate-down-appearance-xxl"
        >
          <h3 className="uppercase text-white text-center font-extrabold text-[32px] leading-[100%]">
            {offersBlock.title}
          </h3>
        </AnimationBlock>
      </div>
      <div
        className="w-full bg-cover"
        style={{ backgroundImage: `url(${MainImg.src})` }}
      >
        <div className="container flex flex-wrap justify-center gap-2 py-[60px] md:gap-0 text-white">
          {offers.map((offer, index) => (
            <AnimationBlock
              key={`advantage-card-${index}`}
              animation="animate-left-appearance-md"
              styles=" w-full md:max-w-[33%] opacity-0"
            >
              <AdvantagesCard index={index} advantage={offer} />
            </AnimationBlock>
          ))}
        </div>
      </div>
    </section>
  );
};
