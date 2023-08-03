'use client';
import axios from 'axios';
import useSWR from 'swr';
import { usePathname, useRouter } from 'next/navigation';

import {
  Form,
  Overlay,
  PageHead,
  MainWrapper,
  ProductRoot,
  showMessage,
  getInitialValues,
} from '@/components';
import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { useDelayAnimation } from '@/hooks';
import { getProducts } from '@/http/product';
import { ACTIVE_CATEGORY } from '@/constants';

const url = '/product';

export const ProductList = ({ categoryId }: { categoryId: string }) => {
  const router = useRouter();
  const path = usePathname();

  const { data } = useSWR(ACTIVE_CATEGORY, () =>
    productRoot.getCategoryById(categoryId),
  );

  const { data: products } = useSWR(categoryId, () => getProducts(categoryId));

  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = async (values: IRootData) => {
    try {
      await productRoot.create(values, url);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showMessage.error(error.response?.data.message);
      }
    } finally {
      setOpen(false);
    }
  };

  return (
    <MainWrapper>
      <PageHead
        head={data ? data.name : 'Loading'}
        onClick={() => router.push(`${path}/create`)}
      />

      <ProductRoot
        url={url}
        notModify
        categories={products}
        swrStorage={categoryId}
        title="Change category:"
        baseHref={`admin/category/${categoryId}/edit/`}
      />

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Form
          onSubmit={onSubmit}
          title="Create Product"
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
};
