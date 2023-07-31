import { IAdvantagesCard } from './types';

export const AdvantagesCard = ({ index, advantage }: IAdvantagesCard) => {
  return (
    <div className="relative w-full px-[30px] md:px-[60px] py-[40px] ">
      <span className="absolute top-0 left-0 md:translate-x-1/2 text-[100px] leading-[100%] opacity-10 font-bold ">
        {index + 1}
      </span>

      <p>{advantage}</p>
    </div>
  );
};
