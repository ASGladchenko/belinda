'use client';
import { AnimationBlock } from '../animation-block';
import { AdvantagesCard } from './advantages-card';
import { getCardsData } from './cardsData';

export const Advantages = () => {
  const cards = getCardsData();

  return (
    <section className="container flex flex-wrap justify-center py-[20px] md:py-[50px]">
      {cards.map((card, index) => (
        <AnimationBlock
          key={`advantages-${index}`}
          animation={
            index % 2 === 0
              ? 'animate-left-appearance-md'
              : 'animate-down-appearance-md'
          }
          styles=" h-full opacity-0 w-full md:max-w-[50%] xl:max-w-[25%]"
        >
          <AdvantagesCard {...card} />
        </AnimationBlock>
      ))}
    </section>
  );
};
