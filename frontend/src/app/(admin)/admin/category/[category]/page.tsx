'use client';
import {
  CategoryWrapper,
  MainWrapper,
  PageHead,
  ProductLink,
} from '@/components';
import { sub_categories } from '@/components/admins/mock/mockdata';

interface ICategory {
  params: {
    category: string;
  };
}

const Category = ({ params: { category } }: ICategory) => {
  const onCreate = () => alert('create');

  return (
    <MainWrapper>
      <PageHead
        head={`${
          category[0].toUpperCase() + category.slice(1)
        } subcategories :`}
        onClick={onCreate}
      />

      <CategoryWrapper>
        {sub_categories.map((s_category) => (
          <ProductLink {...s_category} />
        ))}
      </CategoryWrapper>
    </MainWrapper>
  );
};

export default Category;
