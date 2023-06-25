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
      mutate(data);
      showMessage.success('Changes are successful');
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    } finally {
      setOpen(false);
    }
  };

  console.log(data);

  return (
    <MainWrapper>
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      {!data?.length ? (
        <h2 className="text-3xl font-semibold text-admin-headPage dark:text-white">
          Your Categories list is empty
        </h2>
      ) : (
        <ProductRoot
          url={url}
          categories={data}
          title="Change category"
          baseHref="admin/category/"
        />
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
