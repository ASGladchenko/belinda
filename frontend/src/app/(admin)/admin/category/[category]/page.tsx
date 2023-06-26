'use client';
import { usePathname, useRouter } from 'next/navigation';

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

const Category = ({ params: { category } }: ICategory) => {
  const router = useRouter();
  const path = usePathname();

  const duration = 500;
  const { isOpen, isAnimation, setOpen } = useDelayAnimation(duration);

  const onSubmit = async (values: IRootData) => {
    try {
      await productRoot.create(values, url);
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    } finally {
      setOpen(false);
    }
  };

  return (
    <MainWrapper>
      <PageHead
        head={`${category} :`}
        onClick={() => router.push(`${path}/create`)}
      />

      <ProductRoot
        url={url}
        categories={[]}
        title="Change category:"
        baseHref={`admin/category/${category}`}
      />

      <Overlay
        isOpen={isOpen}
        duration={duration}
        isAnimation={isAnimation}
        setClose={() => setOpen(false)}
      >
        <Form
          onSubmit={onSubmit}
          title="Create Product"
          onClose={() => setOpen(false)}
          initialValues={getInitialValues()}
        />
      </Overlay>
    </MainWrapper>
  );
};

export default Category;
