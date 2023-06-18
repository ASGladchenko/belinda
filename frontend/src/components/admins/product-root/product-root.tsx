import { useEffect, useMemo, useState } from 'react';

import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { useDelayAnimation } from '@/hooks';
import {
  CategoryWrapper,
  Overlay,
  ProductLink,
  showMessage,
} from '@/components';
import { IProductLink } from '@/components/admins/product-link/types';

import { Form } from './form';
import { getInitialValues } from './config';

interface IEdit {
  url: string;
  title: string;
  categories: IProductLink[];
}

export const ProductRoot = ({ categories, url, title }: IEdit) => {
  const [id, setId] = useState('');
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(300);

  const onSubmit = async (values: IRootData) => {
    try {
      const response = await productRoot.edit(values, id, url);
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
    <CategoryWrapper>
      {categories?.map((category) => (
        <ProductLink {...category} onEdit={onEdit} url={url} />
      ))}

      <Overlay
        isOpen={isOpen}
        duration={300}
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
  );
};
