import Image from 'next/image';

import { http } from '@/http/constant';
import * as Images from '@/assets/products/index';
import { AnimationBlock } from '@/components/animation-block';

import { Month } from './month';
import { IProductCard } from './types';

export const ProductCard = ({ name, img, seasonality }: IProductCard) => {
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
              alt={name}
              layout="fill"
              objectFit="contain"
              loader={imageLoaderServer}
              src={img.replace(`${http.url}/`, '')}
            />
          ) : (
            <Image
              fill
              alt={name}
              layout="fill"
              objectFit="contain"
              src={Images.skeleton.src}
            />
          )}
        </div>

        <div className="flex flex-wrap w-full gap-1">
          {seasonality.map((month) => (
            <Month key={month + name} month={month} />
          ))}
        </div>
      </div>
    </AnimationBlock>
  );
};
