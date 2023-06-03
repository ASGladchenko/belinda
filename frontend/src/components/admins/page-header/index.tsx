'use client';
import { useState } from 'react';

import { Add } from '@/assets/icons';
import { Button } from '@/components/button';
import { Overlay } from '@/components/overlay';
import { useDelayAnimation } from '@/hooks/useDelay';
import { BreadCrumps } from '@/components/admins/crumps/helpers';

import Crumps from '../crumps';

import { IPageHead } from './types';

const PageHead = ({ head, onClick }: IPageHead) => {
  const duration = 500;
  const crumps = BreadCrumps();
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  return (
    <div className="flex items-center justify-between w-full p-3 rounded-lg bg-admin-lighten-second dark:bg-admin-darken-second drop-shadow-md">
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
          onClick={() => setOpen(true)}
          icon={<Add width={24} height={24} className="fill-white" />}
        />
      )}

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
        onCreate={() => alert('Create')}
      />
    </div>
  );
};

export default PageHead;
