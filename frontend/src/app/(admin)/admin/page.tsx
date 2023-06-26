'use client';
import useSWR from 'swr';

import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { GET_CATEGORY } from '@/constants';
import { useDelayAnimation } from '@/hooks';
import {
  Form,
  Loader,
  Overlay,
  PageHead,
  MainWrapper,
  ProductRoot,
  showMessage,
  getInitialValues,
} from '@/components';
import { spawn } from 'child_process';

const url = '/category';

function Category() {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const { data, isLoading, mutate } = useSWR(
    GET_CATEGORY,
    productRoot.getCategory,
  );

  const onSubmit = async (values: IRootData) => {
    try {
      await productRoot.create(values, url);
      mutate([...data, values]);
      showMessage.success('Changes are successful');
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    } finally {
      setOpen(false);
    }
  };
  console.log(isLoading, 'isLoading');

  return (
    <MainWrapper>
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      {isLoading && <Loader />}

      {data?.length > 0 && !isLoading && (
        <ProductRoot
          url={url}
          categories={data}
          title="Change category"
          baseHref="admin/category/"
        />
      )}
      {!data?.length && !isLoading && (
        <h2 className="text-2xl font-medium select-none text-admin-headPage dark:text-white font-inter">
          List is empty
        </h2>
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

export default Category;
