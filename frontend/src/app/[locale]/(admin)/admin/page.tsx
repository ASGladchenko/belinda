'use client';
import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

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

const url = '/category';

const Categories = () => {
  const duration = 500;
  const [isFetching, setIsFetching] = useState(false);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const { data, isLoading, mutate } = useSWR(
    GET_CATEGORY,
    productRoot.getCategory,
  );

  const onSubmit = async (values: IRootData) => {
    setIsFetching(true);

    try {
      if (data?.length) {
        await mutate([...data, await productRoot.create(values, url)]);
      } else {
        await mutate([await productRoot.create(values, url)]);
      }

      showMessage.success('Changes are successful');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showMessage.error(error.response?.data.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <MainWrapper>
      <PageHead head="Categories" onClick={() => setOpen(true)} />

      {isLoading && <Loader />}

      {data?.length > 0 && !isLoading && (
        <ProductRoot
          url={url}
          categories={data}
          title="Change category"
          swrStorage={GET_CATEGORY}
          baseHref="admin/category/"
        />
      )}

      {!data && (
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
          onSubmit={onSubmit}
          isLoading={isFetching}
          title="Create Category"
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
};

export default Categories;
