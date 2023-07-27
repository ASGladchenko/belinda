import { useMemo, useState } from 'react';
import useSWRConfig from 'swr';

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
  categories: IProductLink[];
}

export const ProductRoot = ({ categories, url, title, baseHref }: IEdit) => {
  const [id, setId] = useState('');
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(300);
  const { mutate, isLoading } = useSWRConfig(GET_CATEGORY);

  const onSubmit = async (values: IRootData) => {
    try {
      await mutate(productRoot.edit(values, id, url));
      showMessage.success('Changes are successful');
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    } finally {
      setOpen(false);
    }
  };

  const onEdit = async (id: string) => {
    setId(id);
    setOpen(true);
  };

  const initialValues = useMemo(() => {
    return categories?.find((category) => category.id === id);
  }, [id]);

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
              onClose={() => setOpen(false)}
              initialValues={getInitialValues(initialValues)}
            />
          </Overlay>
        </CategoryWrapper>
      )}
    </>
  );
};
