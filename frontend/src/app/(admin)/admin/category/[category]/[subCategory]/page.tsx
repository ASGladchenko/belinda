'use client';
import { usePathname, useRouter } from 'next/navigation';

import {
  CategoryWrapper,
  MainWrapper,
  PageHead,
  ProductLink,
  ProductRoot,
} from '@/components';

interface ISubCategory {
  params: {
    subCategory: string;
  };
}
// import { products } from '@/components/admins/mock/mockdata';

const SubCategory = ({ params: { subCategory } }: ISubCategory) => {
  const router = useRouter();
  const path = usePathname();
  const onCreate = () => router.push(`${path}/create`);

  return (
    <MainWrapper>
      <PageHead
        onClick={onCreate}
        head={`${subCategory.split('_').join(' ')} products:`}
      />
    </MainWrapper>
  );
};

export default SubCategory;
