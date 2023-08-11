import { useTranslations } from 'next-intl';

import * as Images from '@/assets/category/index';

const Seasonality = () => {
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
            <tr className="border border-red-300">
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              ></th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                jan
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                feb
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                mar
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                apr
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                may
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                jun
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                jul
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                aug
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                sep
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                oct
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                nov
              </th>
              <th
                scope="col"
                className="capitalize border border-green-200 dark:border-green-300"
              >
                dec
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                scope="row"
                className="px-5 capitalize border border-green-200 dark:border-green-300"
              >
                kiwi
              </th>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
            </tr>

            <tr>
              <th
                scope="row"
                className="px-5 capitalize border border-green-200 dark:border-green-300"
              >
                Pomegraanate
              </th>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                {' '}
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
              <td className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300">
                X
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Seasonality;
