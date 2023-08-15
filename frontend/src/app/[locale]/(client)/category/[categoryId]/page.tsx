import * as Images from '@/assets/category/index';

import { fruits } from '../mock';
import { ProductCard } from './product-card';

const ClientCategory = ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
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
        <h2 className="uppercase"> {`${fruits.name}  ${categoryId}`}</h2>
      </div>

      <div className="container flex flex-wrap items-center justify-start gap-6 py-[50px] md:gap-3 lg:py-[100px] lg:px-0">
        {fruits.products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ClientCategory;
