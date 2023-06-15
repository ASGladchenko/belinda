'use client';
import { MainWrapper, PageHead } from '@/components';

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
      <h1> CREATE</h1>
    </MainWrapper>
  );
};

export default Create;
