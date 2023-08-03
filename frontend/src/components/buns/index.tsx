'use client';
import { BunsCard } from './buns-card';
import { TranslatedBuns } from '../content-data';
import { AnimationBlock } from '../animation-block';

export const Buns = () => {
  const cards = TranslatedBuns();

  return (
    <section className="flex flex-wrap justify-center ">
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
          <BunsCard {...card} />
        </AnimationBlock>
      ))}
    </section>
  );
};
