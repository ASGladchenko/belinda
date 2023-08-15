import Check from '@/assets/seasons/check.png';

import { IProductSeasons } from './type';

export const ProductSeasons = ({ name, seasonality }: IProductSeasons) => {
  return (
    <tr>
      <th
        scope="row"
        className="px-5 capitalize border border-green-200 dark:border-green-300"
      >
        {name}
      </th>

      {seasonality.map((month, idx) => (
        <td
          key={`${month}-table-${idx}`}
          className="text-center min-w-[70px] max-w-[80px] py-1 border-green-200 border dark:border-green-300"
        >
          {month !== '' && (
            <div
              style={{ backgroundImage: `url(${Check.src})` }}
              className="w-[16px] p-2 h-[16px] bg-cover bg-no-repeat mx-auto"
            ></div>
          )}
        </td>
      ))}
    </tr>
  );
};
