import { Add } from '@/assets/icons';
import { Button } from '@/components/button';
import { BreadCrumps } from '@/components/admins/crumps/helpers';

import Crumps from '../crumps';

import { IPageHead } from './types';

const PageHead = ({}: IPageHead) => {
  const crumps = BreadCrumps();

  return (
    <div className="flex items-center justify-between w-full p-3 rounded-lg bg-admin-lighten-second dark:bg-admin-darken-second drop-shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium text-admin-headPage dark:text-white font-inter">
          Page-header
        </h1>
        <Crumps crumps={crumps} />
      </div>
      <Button
        variant="primary"
        text="Create category"
        className="rounded-full"
        icon={<Add width={24} height={24} className="fill-white" />}
      />
    </div>
  );
};

export default PageHead;
