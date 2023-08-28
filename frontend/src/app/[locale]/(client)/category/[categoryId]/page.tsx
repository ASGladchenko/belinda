import { ClientCategory } from './client-category';

const ClientCategoryPage = ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  return <ClientCategory categoryId={categoryId} />;
};

export default ClientCategoryPage;
