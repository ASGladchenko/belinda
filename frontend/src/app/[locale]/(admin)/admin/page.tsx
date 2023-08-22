import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import CategoriesClient from './catergories';

const Categories = () => {
  const validation = useTranslations('validation');
  const categories = useTranslations('categories');
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

  const catagoriesText = useMemo(
    () => ({
      title: categories('title'),
      btnText: categories('create_btn'),
    }),
    [categories],
  );

  return (
    <CategoriesClient
      formText={formText}
      headTitle={catagoriesText.title}
      btnText={catagoriesText.btnText}
    />
  );
};

export default Categories;
