import { useMemo } from 'react';
import { useTranslations } from 'next-intl';

import EditPage from './edit-page';
interface ISubCategory {
  params: {
    product: string;
  };
}
const EditProduct = ({ params: { product: productId } }: ISubCategory) => {
  const categories = useTranslations('categories');
  const validation = useTranslations('validation');
  const seasonality = useTranslations('seasonality');
  const productForm = useTranslations('product-form');

  const categoriesText = useMemo(
    () => ({
      create: categories('create'),
      edit: categories('edit'),
    }),
    [categories],
  );

  const productFormText = useMemo(
    () => ({
      create: productForm('create'),
      confirm: productForm('confirm'),
      name_uk: productForm('name_uk'),
      name_eng: productForm('name_eng'),
      description_uk: productForm('description_uk'),
      description_eng: productForm('description_eng'),
      message: {
        matches_cyrillic: validation('matches_cyrillic'),
        matches_english: validation('matches_english'),
        required: validation('required'),
        min3: validation('min3'),
        min2: validation('min2'),
      },
    }),
    [productForm, validation],
  );

  const months = useMemo(
    () => [
      seasonality('jan'),
      seasonality('feb'),
      seasonality('mar'),
      seasonality('apr'),
      seasonality('may'),
      seasonality('jun'),
      seasonality('jul'),
      seasonality('aug'),
      seasonality('sep'),
      seasonality('oct'),
      seasonality('nov'),
      seasonality('dec'),
    ],
    [seasonality],
  );

  return (
    <EditPage
      months={months}
      productId={productId}
      categoriesText={categoriesText}
      productFormText={productFormText}
      pickerTitle={seasonality('title')}
    />
  );
};

export default EditProduct;
