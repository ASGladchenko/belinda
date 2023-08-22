'use client';
import useSWR from 'swr';
import axios from 'axios';
import { FormikValues } from 'formik';
import { useRouter } from 'next/navigation';

import {
  Loader,
  PageHead,
  MainWrapper,
  ProductForm,
  showMessage,
} from '@/components';
import { product } from '@/http';
import { IProduct } from '@/components/admins/product-form/types';
import { getInitialValues } from '@/components/admins/product-form/config';

import { IEditPage } from './types';

const EditPage = ({
  months,
  productId,
  pickerTitle,
  categoriesText,
  productFormText,
}: IEditPage) => {
  const router = useRouter();
  const { data, isLoading } = useSWR(productId, () =>
    product.getProductById(productId),
  );

  const initialValues =
    isLoading || !data ? ({} as IProduct) : getInitialValues(data);

  const onSubmit = async (values: FormikValues) => {
    const { name, name_ua, description, description_ua, img_url, months } =
      values;
    const formData = new FormData();

    if (data?.id) {
      formData.append('name', name);
      formData.append('name_ua', name_ua);
      formData.append('img_url', img_url);
      formData.append('categoryId', data.id);
      formData.append('description', description);
      formData.append('description_ua', description_ua);
      formData.append('months', JSON.stringify(months));
    }

    try {
      await product.edit(formData, productId);
      // TODO Translate to message
      showMessage.success('Продукт зміненно');
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PageHead
            btnText=""
            head={data ? `${categoriesText.edit} ${data?.name}` : 'Loading...'}
          />

          <ProductForm
            months={months}
            onSubmit={onSubmit}
            pickerTitle={pickerTitle}
            initialValues={initialValues}
            productFormText={productFormText}
          />
        </>
      )}
    </MainWrapper>
  );
};

export default EditPage;
