'use client';
import { CategoryWrapper, MainWrapper, PageHead } from '@/components';

interface ISubCategory {
  params: {
    product: string;
  };
}

const Product = ({ params: { product } }: ISubCategory) => {
  return (
    <MainWrapper>
      <PageHead maxCrumps={4} head={product.split('_').join(' ')} />

      <CategoryWrapper>
        <h1>{product}</h1>
      </CategoryWrapper>
    </MainWrapper>
  );
};

export default Product;
