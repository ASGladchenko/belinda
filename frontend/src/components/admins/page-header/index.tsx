import { Add } from '@/assets/icons';
import { Button, Crumps } from '@/components';

import { IPageHead } from './types';
import { BreadCrumps } from '../crumps/helpers';

const PageHead = ({ head, onClick, maxCrumps }: IPageHead) => {
  const crumps = BreadCrumps();

  return (
    <div className="flex flex-col items-start justify-between w-full gap-3 rounded-lg sm:items-center sm:flex-row ">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium capitalize select-none text-admin-headPage dark:text-white font-inter">
          {head}
        </h1>

        <Crumps crumps={crumps} max={maxCrumps} />
      </div>

      {!!onClick && (
        <Button
          text="Create"
          variant="primary"
          onClick={onClick}
          icon={<Add width={24} height={24} />}
          className="self-end rounded-full sm:self-center fill-white hover:fill-green-400 dark:enabled:hover:fill-green-300"
        />
      )}
    </div>
  );
};

export { PageHead };
