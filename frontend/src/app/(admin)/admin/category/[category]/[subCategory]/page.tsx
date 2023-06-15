'use client';
import { usePathname, useRouter } from 'next/navigation';

import {
  CategoryWrapper,
  MainWrapper,
  PageHead,
  ProductLink,
} from '@/components';

interface ISubCategory {
  params: {
    subCategory: string;
  };
}
import { products } from '@/components/admins/mock/mockdata';

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

      <CategoryWrapper>
        {products.map((product) => (
          <ProductLink {...product} modify={false} />
        ))}
      </CategoryWrapper>
    </MainWrapper>
  );
};

export default SubCategory;
