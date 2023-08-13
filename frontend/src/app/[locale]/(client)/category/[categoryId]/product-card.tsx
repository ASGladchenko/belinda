import { AnimationBlock } from '@/components/animation-block';
import { IProductCard } from './types';
import { Month } from './month';

export const ProductCard = ({ name, img, seasonality }: IProductCard) => {
  return (
    <AnimationBlock
      animation="animate-down-appearance-md"
      styles="opacity-0 max-w-[300px] w-full mx-auto py-6"
    >
      <div className="w-full">
        <h3 className=" text-[28px] capitalize font-pacifico mb-3 text-center">
          {name}
        </h3>

        <div
          style={{
            backgroundImage: `url(${img})`,
          }}
          className="relative cursor-pointer max-w-[260px] bg-no-repeat  w-full bg-contain bg-center aspect-[3/2] hover:scale-110 transition duration-500 mx-auto"
        ></div>

        <div className="flex flex-wrap w-full gap-1">
          {seasonality.map((month) => (
            <Month key={month + name} month={month} />
          ))}
        </div>
      </div>
    </AnimationBlock>
  );
};
