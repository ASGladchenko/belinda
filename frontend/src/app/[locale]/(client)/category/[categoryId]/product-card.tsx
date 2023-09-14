import Image from 'next/image';

import { http } from '@/constants';
import { AnimationBlock } from '@/components/animation-block';
import { default as skeleton } from '@/assets/products/skeleton.png';

import { Month } from './month';
import { IProductCard } from './types';

export const ProductCard = ({
  img,
  name,
  seasonality,
  translatedMonths,
}: IProductCard) => {
  // TODO Change types
  const imageLoaderServer = ({ src, width, quality }: any) => {
    return `${http.url}/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <AnimationBlock
      animation="animate-down-appearance-md"
      styles="opacity-0 max-w-[300px] w-full mx-auto py-6"
    >
      <div className="flex flex-col w-full h-[308px]">
        <h3 className=" text-[28px] capitalize font-pacifico mb-5 text-center">
          {name}
        </h3>

        <div className="relative w-[280px] h-[200px] mx-auto mb-5">
          {img ? (
            <Image
              fill
              alt={name}
              sizes="100%"
              loader={imageLoaderServer}
              className="object-contain"
              src={img.replace(`${http.url}/`, '')}
            />
          ) : (
            <Image
              fill
              alt={name}
              sizes="100%"
              src={skeleton.src}
              className="object-contain"
            />
          )}
        </div>

        <div className="flex flex-wrap w-full gap-1">
          {seasonality.map((month) => {
            const translatedMonth =
              translatedMonths.find(({ name }) => name === month)?.value || '';
            return <Month key={month + name} month={translatedMonth} />;
          })}
        </div>
      </div>
    </AnimationBlock>
  );
};
