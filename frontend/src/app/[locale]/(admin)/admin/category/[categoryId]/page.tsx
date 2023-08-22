import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import { ProductList } from './product';

interface ICategory {
  params: {
    categoryId: string;
  };
}

const Product = ({ params: { categoryId } }: ICategory) => {
  const categories = useTranslations('categories');
  const btnText = categories('create_btn');
  const validation = useTranslations('validation');
  const form = useTranslations('create-edit-categories');

  const formText = useMemo(
    () => ({
      edit: form('editTitle'),
      create: form('createTitle'),
      btnConfirm: form('confirm'),
      btnCancel: form('cancel'),
      name_uk: form('name_uk'),
      name_eng: form('name_eng'),
      message: {
        matches_cyrillic: validation('matches_cyrillic'),
        matches_english: validation('matches_english'),
        required: validation('required'),
        min3: validation('min3'),
        min2: validation('min2'),
      },
    }),
    [form, validation],
  );

  return (
    <ProductList
      btnText={btnText}
      formText={formText}
      categoryId={categoryId}
    />
  );
};

export default Product;
