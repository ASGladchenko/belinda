import { IRootData } from '@/types';

import { belinda } from './interceptor';

export const getCategory = (url: string) =>
  belinda.get(url).then(({ data }) => data);

export const getCategoryById = (id: string) =>
  belinda.get(`/category/${id}`).then(({ data }) => data);

export const getSubCategory = () =>
  belinda.get('/sub-category').then(({ data }) => data);

export const getSubCategoryById = (id: string) =>
  belinda.get(`/sub-category/${id}`).then(({ data }) => data);

export const create = (data: IRootData, url: string) =>
  belinda.post(url, data).then(({ data }) => data);

export const edit = (data: IRootData, id: string, url: string) =>
  belinda.put(`${url}/${id}`, data).then(({ data }) => data);

export const remove = (id: string, url: string) =>
  belinda.delete(`${url}/${id}`).then(({ data }) => data);
