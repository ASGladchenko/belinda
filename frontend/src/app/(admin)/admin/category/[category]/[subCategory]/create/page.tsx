'use client';
import { CreateProduct, MainWrapper, PageHead } from '@/components';

interface ISubCategory {
  params: {
    product: string;
  };
}

const Create = ({ params: { product } }: ISubCategory) => {
  const onCreate = () => alert('create');

  return (
    <MainWrapper>
      <PageHead head="Create" />
      <CreateProduct></CreateProduct>
    </MainWrapper>
  );
};

export default Create;
