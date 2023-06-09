'use client';
import { Add } from '@/assets/icons';
import { Button } from '@/components/button';

import { Crumps } from '../crumps';
import { BreadCrumps } from '../crumps/helpers';

import { IPageHead } from './types';

const PageHead = ({ head, onClick }: IPageHead) => {
  const crumps = BreadCrumps();

  return (
    <div className="flex items-center justify-between w-full p-3 rounded-lg ">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium select-none text-admin-headPage dark:text-white font-inter">
          {head}
        </h1>

        <Crumps crumps={crumps} />
      </div>

      {!!onClick && (
        <Button
          variant="primary"
          text="Create"
          className="rounded-full"
          onClick={onClick}
          icon={<Add width={24} height={24} className="fill-white" />}
        />
      )}
    </div>
  );
};

export { PageHead };
