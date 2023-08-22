import { values } from './mock';
import { Month } from './month';
import { IMonthsPicker } from './types';

export const MonthsPicker = ({
  name,
  months,
  pickerTitle,
  activeMonths = [],
}: IMonthsPicker) => {
  return (
    <div className="w-full">
      <h3 className="w-full mb-5 text-center capitalize">{pickerTitle}</h3>

      <div
        role="group"
        aria-labelledby="checkbox-group"
        className="flex flex-wrap items-start w-full gap-3"
      >
        {months.map((month, idx) => (
          <Month
            idx={idx}
            name={name}
            month={month}
            values={values}
            key={`seasonality-${idx}`}
            activeMonths={activeMonths}
          />
        ))}
      </div>
    </div>
  );
};
