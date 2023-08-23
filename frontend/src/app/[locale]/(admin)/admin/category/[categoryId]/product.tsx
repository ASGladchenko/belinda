'use client';
import useSWR from 'swr';
import { usePathname, useRouter } from 'next/navigation';

import { IFormText } from '@/types';
import { productRoot } from '@/http';
import { getProducts } from '@/http/product';
import { ACTIVE_CATEGORY } from '@/constants';
import { PageHead, MainWrapper, ProductRoot } from '@/components';

const url = '/product';

interface IProductList {
  btnText: string;
  categoryId: string;
  formText: IFormText;
}

export const ProductList = ({
  btnText,
  formText,
  categoryId,
}: IProductList) => {
  const router = useRouter();
  const path = usePathname();

  const { data } = useSWR(ACTIVE_CATEGORY, () =>
    productRoot.getCategoryById(categoryId),
  );

  const { data: products } = useSWR(categoryId, () => getProducts(categoryId));

  return (
    <MainWrapper>
      <PageHead
        btnText={btnText}
        head={data ? data.name : 'Loading'}
        onClick={() => router.push(`${path}/create`)}
      />

      <ProductRoot
        url={url}
        notModify
        formText={formText}
        categories={products}
        swrStorage={categoryId}
        title="Change category:"
        baseHref={`${categoryId}/edit/`}
      />
    </MainWrapper>
  );
};
