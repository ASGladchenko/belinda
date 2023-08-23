'use client';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { useSWRConfig } from 'swr';

import { productRoot } from '@/http';
import { GET_CATEGORY } from '@/constants';
import { useDelayAnimation } from '@/hooks';
import { IFormText, IRootData } from '@/types';
import { IProductLink } from '@/components/admins/product-link/types';
import {
  Overlay,
  ProductLink,
  showMessage,
  CategoryWrapper,
} from '@/components';

import { Form } from './form';
import { getInitialValues } from './config';

interface IProductRoot {
  url: string;
  title: string;
  baseHref: string;
  swrStorage: string;
  notModify?: boolean;
  formText: IFormText;
  categories: IProductLink[];
}

export const ProductRoot = ({
  url,
  title,
  formText,
  baseHref,
  notModify,
  swrStorage,
  categories,
}: IProductRoot) => {
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
          {categories?.map((category, idx) => (
            <ProductLink
              {...category}
              url={url}
              onEdit={onEdit}
              baseHref={baseHref}
              notModify={notModify}
              swrStorage={swrStorage}
              key={`product-link-${idx}`}
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
              formText={formText}
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
