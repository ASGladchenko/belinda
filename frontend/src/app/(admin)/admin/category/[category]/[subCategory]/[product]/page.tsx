'use client';
import { MainWrapper, PageHead } from '@/components';

interface ISubCategory {
  params: {
    product: string;
  };
}

const Product = ({ params: { product } }: ISubCategory) => {
  const onCreate = () => alert('create');

  return (
    <MainWrapper>
      <PageHead
        maxCrumps={4}
        onClick={onCreate}
        head={product.split('_').join(' ')}
      />

      <h1>{product}</h1>
    </MainWrapper>
  );
};

export default Product;
