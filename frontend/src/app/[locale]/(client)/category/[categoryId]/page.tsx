import { useTranslations } from 'next-intl';

import { mockMonth } from '@/constants';
import { ClientCategory } from './client-category';

const ClientCategoryPage = ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  const seasons = useTranslations('seasonality');
  const months = [
    ...mockMonth.map((month) => ({ name: month, value: seasons(month) })),
  ];

  return <ClientCategory months={months} categoryId={categoryId} />;
};

export default ClientCategoryPage;
