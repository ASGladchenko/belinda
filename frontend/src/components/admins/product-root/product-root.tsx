import { useMemo, useState } from 'react';

import { IRootData } from '@/types';
import { productRoot } from '@/http';
import { useDelayAnimation } from '@/hooks';
import { CategoryWrapper, Overlay, ProductLink } from '@/components';
import { IProductLink } from '@/components/admins/product-link/types';

import { Form } from './form';
import { getInitialValues } from './config';

interface IEdit {
  url: string;
  categories: IProductLink[];
}

export const ProductRoot = ({ categories, url }: IEdit) => {
  const [id, setId] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(300);

  const onSubmit = async (values: IRootData) => {
    try {
      const response = await productRoot.edit(values, id, url);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setOpen(false);
    }
  };

  const onDelete = async (id: string) => {
    setOpen(true);
    setIsDeleting(true);
    // try {
    //   await productRoot.remove(id, url);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setOpen(false);
    // }
  };

  const initialValues = useMemo(() => {
    return categories.find((category) => category.id === id);
  }, [id]);

  return (
    <CategoryWrapper>
      {categories.map((category) => (
        <ProductLink {...category} setId={setId} onDelete={onDelete} />
      ))}

      <Overlay
        isOpen={isOpen}
        duration={300}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        {!isDeleting ? (
          <Form
            onSubmit={onSubmit}
            onClose={() => setOpen(false)}
            initialValues={getInitialValues(initialValues)}
          />
        ) : (
          <div>COMPONENT DELETINIG</div>
        )}
      </Overlay>
    </CategoryWrapper>
  );
};
