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
  showMessage,
  getInitialValues,
} from '@/components';

interface ICategory {
  params: {
    category: string;
  };
}

const url = '/sub-category';

import { sub_categories } from '@/components/admins/mock/mockdata';

const Category = ({ params: { category } }: ICategory) => {
  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = async (values: IRootData) => {
    try {
      const response = await productRoot.create(values, url);
      showMessage.success('Changes are successful');
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    } finally {
      setOpen(false);
    }
  };
  return (
    <MainWrapper>
      <PageHead
        head={`${category} subcategories :`}
        onClick={() => setOpen(true)}
      />

      <ProductRoot
        categories={sub_categories}
        url={url}
        title="Change Subcategory"
      />

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Form
          title="Create Subcategory"
          onSubmit={onSubmit}
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
};

export default Category;
