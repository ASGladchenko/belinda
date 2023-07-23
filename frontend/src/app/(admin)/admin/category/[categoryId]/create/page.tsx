'use client';
import useSWR from 'swr';
import { FormikValues } from 'formik';
import { usePathname, useRouter } from 'next/navigation';

import { product, productRoot } from '@/http';
import { ACTIVE_CATEGORY } from '@/constants';
import { ProductForm, MainWrapper, PageHead, showMessage } from '@/components';
import { getInitialValues } from '@/components/admins/product-form/config';

const Create = () => {
  const path = usePathname();
  const categoryId = path.split('/')[path.split('/').length - 2];

  const { data } = useSWR(ACTIVE_CATEGORY, () =>
    productRoot.getCategoryById(categoryId),
  );

  console.log(path.slice());

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
      await product.create(formData);
      // route.push()
    } catch (error: any) {
      showMessage.error(error.response.data.message);
    }
  };

  return (
    <MainWrapper>
      <PageHead head={data ? `Create in ${data?.name}` : 'Loading...'} />
      <ProductForm onSubmit={onSubmit} initialValues={getInitialValues()} />
    </MainWrapper>
  );
};

export default Create;
