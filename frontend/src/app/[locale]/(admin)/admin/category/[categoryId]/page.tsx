import { ProductList } from './product';

interface ICategory {
  params: {
    categoryId: string;
  };
}

const Product = ({ params: { categoryId } }: ICategory) => {
  return <ProductList categoryId={categoryId} />;
};

export default Product;
