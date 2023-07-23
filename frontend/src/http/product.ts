import { IProductSend } from '@/types';
import { belinda } from './interceptor';

export const getProductById = (id: string) =>
  belinda.get(`/product/${id}`).then(({ data }) => data);

export const getProducts = (categoryId: string) =>
  belinda.get(`/product`, { params: { categoryId } }).then(({ data }) => data);

export const create = (data: any) =>
  belinda
    .post('/product/', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(({ data }) => data);

export const edit = (data: any, id: string) =>
  belinda.put(`/product/${id}`, data).then(({ data }) => data);

export const remove = (id: string) =>
  belinda.delete(`/product/${id}`).then(({ data }) => data);
