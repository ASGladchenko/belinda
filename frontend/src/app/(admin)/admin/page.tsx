'use client';
import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { useDelayAnimation } from '@/hooks';
import {
  Form,
  Overlay,
  PageHead,
  MainWrapper,
  ProductRoot,
  getInitialValues,
} from '@/components';

const url = '/category';

import { categories } from '@/components/admins/mock/mockdata';

function Products() {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = async (values: IRootData) => {
    try {
      const response = await productRoot.create(values, url);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
    }
  };

  return (
    <MainWrapper>
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      <ProductRoot categories={categories} url={url} />

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Form
          onSubmit={onSubmit}
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
}

export default Products;
