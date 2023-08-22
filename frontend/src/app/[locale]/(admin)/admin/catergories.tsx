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

import { ICategoriesClient } from './types';

const url = '/category';

const CategoriesClient = ({
  btnText,
  formText,
  headTitle,
}: ICategoriesClient) => {
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
      // TODO TRANSLATE THIS MASSAGE
      showMessage.success('Changes are successful');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showMessage.error(error.response?.data.message);
      }
    } finally {
      setIsFetching(false);
      setOpen(false);
    }
  };

  return (
    <MainWrapper>
      <PageHead
        head={headTitle}
        btnText={btnText}
        onClick={() => setOpen(true)}
      />

      {isLoading && <Loader />}

      {data?.length > 0 && !isLoading && (
        <ProductRoot
          url={url}
          categories={data}
          formText={formText}
          title={formText.edit}
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
          formText={formText}
          isLoading={isFetching}
          title={formText.create}
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
};

export default CategoriesClient;
