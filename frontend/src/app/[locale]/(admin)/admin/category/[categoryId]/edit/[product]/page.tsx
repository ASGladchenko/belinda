'use client';
import useSWR from 'swr';
import { FormikValues } from 'formik';
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
import axios from 'axios';

interface ISubCategory {
  params: {
    product: string;
  };
}

const Product = ({ params: { product: productID } }: ISubCategory) => {
  const { data, isLoading } = useSWR(productID, () =>
    product.getProductById(productID),
  );

  const initialValues =
    isLoading || !data ? ({} as IProduct) : getInitialValues(data);

  const onSubmit = async (values: FormikValues) => {
    const { name, name_ua, description, description_ua, img_url } = values;
    const formData = new FormData();

    if (data?.id) {
      formData.append('name', name);
      formData.append('name_ua', name_ua);
      formData.append('img_url', img_url);
      formData.append('categoryId', data.id);
      formData.append('description', description);
      formData.append('description_ua', description_ua);
    }

    try {
      await product.edit(formData, productID);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        showMessage.error(error.response?.data.message);
      }
    }
  };

  return (
    <MainWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PageHead head={data ? `Edit ${data?.name}` : 'Loading...'} />
          <ProductForm onSubmit={onSubmit} initialValues={initialValues} />
        </>
      )}
    </MainWrapper>
  );
};

export default Product;