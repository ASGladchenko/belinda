'use client';
import useSWR from 'swr';
import axios from 'axios';
import { FormikValues } from 'formik';
import { usePathname, useRouter } from 'next/navigation';

import { product, productRoot } from '@/http';
import { ACTIVE_CATEGORY } from '@/constants';
import { getInitialValues } from '@/components/admins/product-form/config';
import { ProductForm, MainWrapper, PageHead, showMessage } from '@/components';

import { ICreatePage } from './types';

const CreatePage = ({
  months,
  pickerTitle,
  categoriesText,
  productFormText,
}: ICreatePage) => {
  const router = useRouter();
  const path = usePathname();

  const categoryId = path.split('/')[path.split('/').length - 2];

  const { data } = useSWR(ACTIVE_CATEGORY, () =>
    productRoot.getCategoryById(categoryId),
  );

  const onSubmit = async (values: FormikValues) => {
    const {
      name_en,
      name_ua,
      img_url,
      description_en,
      months,
      description_ua,
    } = values;

    console.log(img_url);

    const formData = new FormData();

    if (data?.id) {
      formData.append('name_en', name_en);
      formData.append('name_ua', name_ua);
      formData.append('img_url', img_url);
      formData.append('categoryId', data.id);
      formData.append('description_en', description_en);
      formData.append('description_ua', description_ua);
      formData.append('months', JSON.stringify(months));
    }

    try {
      await product.create(formData);
      // TODO Translate to message
      showMessage.success('Продукт створенно');
      router.back();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (Array.isArray(error.response?.data.message)) {
          error.response?.data.message.forEach((message: string) =>
            showMessage.error(message),
          );
        }
        if (!Array.isArray(error.response?.data.message)) {
          showMessage.error(error.response?.data.message);
        }
      }
    }
  };

  return (
    <MainWrapper>
      <PageHead
        btnText=""
        head={data ? `${categoriesText.create} ${data?.name}` : 'Loading...'}
      />

      <ProductForm
        months={months}
        onSubmit={onSubmit}
        pickerTitle={pickerTitle}
        productFormText={productFormText}
        initialValues={getInitialValues()}
      />
    </MainWrapper>
  );
};

export default CreatePage;
