import React from 'react';
import { Field } from 'formik';

import { CheckIcon } from '@heroicons/react/20/solid';

import { IMonth } from './types';

export const Month = ({ idx, name, month, values, activeMonths }: IMonth) => {
  const checked = activeMonths.includes(values[idx]);

  return (
    <label
      key={`seasonality-${idx}`}
      className={`group cursor-pointer relative flex gap-2 items-center mx-auto w-[64px]`}
    >
      <Field
        name={name}
        label={month}
        type="checkbox"
        className="hidden"
        value={values[idx]}
        checked={activeMonths.includes(values[idx])}
      />

      <span
        className={`w-5 h-5 transition duration-300 ease-in-out border-2 rounded border-admin-lighten-border dark:border-admin-darken-border group-hover:border-admin-primary  dark:group-hover:border-admin-primary ${
          checked &&
          'bg-admin-primary border-admin-primary disabled:bg-lighten-main disabled:bg-darken-main'
        }`}
      />

      <CheckIcon
        className={`absolute  opacity-0 stroke-2 group-hover:opacity-100 group-hover:stroke-admin-primary left-[2px] h-4 w-4 text-lighten-blue dark:text-darken-blue shrink-0 duration-300 ease-in-out z-10 ${
          checked &&
          'opacity-100 disabled:opacity-0 disabled:cursor-default stroke-white '
        }`}
      />

      <span className="capitalize transition duration-300 ease-in-out group-hover:text-admin-primary text-admin-lighten-grey dark:text-admin-btnWhite">
        {month}
      </span>
    </label>
  );
};
