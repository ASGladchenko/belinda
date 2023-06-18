'use client';
import useSWR from 'swr';

import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { GET_CATEGORY } from '@/constants';
import { useDelayAnimation } from '@/hooks';
import {
  Form,
  Overlay,
  PageHead,
  MainWrapper,
  ProductRoot,
  showMessage,
  getInitialValues,
} from '@/components';

const url = '/category';

import { categories } from '@/components/admins/mock/mockdata';

function Products() {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const { data, isLoading } = useSWR(GET_CATEGORY, productRoot.getCategory);

  const onSubmit = async (values: IRootData) => {
    try {
      const response = await productRoot.create(values, url);
      showMessage.success('Changes are successful');
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    } finally {
      setOpen(false);
    }
  };

  return (
    <MainWrapper>
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      {data?.length > 0 && (
        <ProductRoot categories={data} url={url} title="Change category" />
      )}

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Form
          title="Create Category"
          onSubmit={onSubmit}
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
}

export default Products;
