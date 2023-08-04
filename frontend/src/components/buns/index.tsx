import { IBuns } from './types';
import { BunsCard } from './buns-card';
import { translatedBuns } from './config';
import { AnimationBlock } from '../animation-block';

export const Buns = (props: IBuns) => {
  const cards = translatedBuns(props);

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
