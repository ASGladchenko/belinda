import { ChildrenProps } from '@/types';

const CategoryWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="flex flex-col w-full gap-5 p-2 rounded-lg md:p-5 bg-admin-lighten-second dark:bg-admin-darken-second ">
      {children}
    </div>
  );
};

export { CategoryWrapper };
