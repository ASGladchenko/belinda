'use client';
import useSWR from 'swr';
import * as Images from '@/assets/category/index';

import { productRoot } from '@/http';
import { Loader } from '@/components';
import { getProducts } from '@/http/product';

import { ProductCard } from './product-card';
import { IClientCategory, IProduct } from './types';

export const ClientCategory = ({ categoryId }: IClientCategory) => {
  const { data, isLoading } = useSWR(categoryId, () =>
    productRoot.getCategoryById(categoryId),
  );

  const { data: products, isLoading: isLoadingProducts } = useSWR(
    `products/${categoryId}`,
    () => getProducts(categoryId),
  );

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${
            Object.values(Images)[Math.round(Math.random() * 1)].src
          })`,
        }}
        className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold w-full h-[346px] bg-cover flex items-center justify-center text-white"
      >
        <h2 className="uppercase">
          {`${isLoading ? 'Loading...' : data?.name}`}
        </h2>
      </div>

      <div className="container flex flex-wrap items-center justify-center gap-6 py-[50px] md:gap-3 lg:py-[100px] lg:px-0">
        {isLoadingProducts && <Loader />}

        {!isLoadingProducts && !products?.length && 'Products List is empty'}

        {!isLoadingProducts &&
          products &&
          products.map(({ id, name, months, img_url }: IProduct) => (
            <ProductCard
              id={id}
              key={id}
              name={name}
              img={img_url}
              seasonality={months}
            />
          ))}
      </div>
    </section>
  );
};
