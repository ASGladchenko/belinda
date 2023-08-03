'use client';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { useSWRConfig } from 'swr';

import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { GET_CATEGORY } from '@/constants';
import { useDelayAnimation } from '@/hooks';
import {
  Overlay,
  ProductLink,
  showMessage,
  CategoryWrapper,
} from '@/components';
import { IProductLink } from '@/components/admins/product-link/types';

import { Form } from './form';
import { getInitialValues } from './config';

interface IEdit {
  url: string;
  title: string;
  baseHref: string;
  swrStorage: string;
  notModify?: boolean;
  categories: IProductLink[];
}

export const ProductRoot = ({
  categories,
  url,
  title,
  baseHref,
  notModify,
  swrStorage,
}: IEdit) => {
  const [id, setId] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const { mutate } = useSWRConfig();
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(300);

  const onSubmit = async (values: IRootData) => {
    try {
      setIsFetching(true);
      await productRoot.edit(values, id, url);
      mutate(GET_CATEGORY);
      showMessage.success('Changes are successful');
      setOpen(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showMessage.error(error.response?.data.message);
      }
    } finally {
      setIsFetching(false);
    }
  };

  const onEdit = async (id: string) => {
    setId(id);
    setOpen(true);
  };

  const initialValues = useMemo(() => {
    return categories?.find((category) => category.id === id);
  }, [id, categories]);

  return (
    <>
      {categories?.length > 0 && (
        <CategoryWrapper>
          {categories?.map((category) => (
            <ProductLink
              {...category}
              url={url}
              onEdit={onEdit}
              key={category.id}
              baseHref={baseHref}
              notModify={notModify}
              swrStorage={swrStorage}
            />
          ))}

          <Overlay
            duration={300}
            isOpen={isOpen}
            isAnimation={isAnimation}
            setClose={() => {
              setOpen(false);
            }}
          >
            <Form
              title={title}
              onSubmit={onSubmit}
              isLoading={isFetching}
              onClose={() => setOpen(false)}
              initialValues={getInitialValues(initialValues)}
            />
          </Overlay>
        </CategoryWrapper>
      )}
    </>
  );
};
