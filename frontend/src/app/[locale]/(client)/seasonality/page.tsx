import { useTranslations } from 'next-intl';

import * as Images from '@/assets/category/index';

import { ProductSeasons } from './productSeasons';
import { SeasonMonths, seasonsProducts } from './mock';

const Seasonality = () => {
  const months = SeasonMonths();
  const page = useTranslations('header-client');

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${Images.fruit.src})`,
        }}
        className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-bold w-full h-[346px] bg-cover flex items-center justify-center text-white"
      >
        <h2 className="capitalize">{page('seasonality')}</h2>
      </div>
      <div className="container py-5 overflow-x-scroll scroll-client">
        <table className="w-full">
          <thead>
            <tr>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              ></th>

              {months.map((month, index) => (
                <th
                  key={`${month}-${index}`}
                  scope="col"
                  className="capitalize border border-green-200 dark:border-green-300"
                >
                  <span className="rotate-45">{month}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {seasonsProducts.map((product) => (
              <ProductSeasons key={`seasons-${product.id}`} {...product} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Seasonality;
