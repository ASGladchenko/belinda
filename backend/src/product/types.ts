import { ProductDto } from './dto/product.dto';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateProductDto extends Omit<ProductDto, 'categoryId'> {}
