'use client';
import { Add } from '@/assets/icons';
import { Button, Crumps } from '@/components';

import { BreadCrumps } from '../crumps/helpers';

import { IPageHead } from './types';

const PageHead = ({ head, onClick, maxCrumps }: IPageHead) => {
  const crumps = BreadCrumps();

  return (
    <div className="flex items-center justify-between w-full rounded-lg ">
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
          className="rounded-full fill-white hover:fill-green-400 dark:enabled:hover:fill-green-300"
        />
      )}
    </div>
  );
};

export { PageHead };
