import { IProductLink } from '../product-link/types';

export const categories: IProductLink[] = [
  {
    id: 1,
    name: 'fruits',
    href: '/admin/category/fruits',
  },
  {
    id: 2,
    name: 'vegetables',
    href: '/admin/category/vegetables',
  },
];

export const sub_categories: IProductLink[] = [
  {
    id: 1,
    name: 'stone fruits',
    href: '/admin/category/fruits/stone_fruits',
  },
  {
    id: 2,
    name: 'berries',
    href: '/admin/category/fruits/berries',
  },
  {
    id: 3,
    name: 'apples',
    href: '/admin/category/fruits/apples',
  },
  {
    id: 4,
    name: 'exotics',
    href: '/admin/category/fruits/exotic_fruits',
  },
];

export const products = [
  {
    id: 1,
    name: 'apricot',
    href: '/admin/category/fruits/stone_fruits/apricot',
  },
  {
    id: 2,
    name: 'nectarine',
    href: '/admin/category/fruits/stone_fruits/nectarine',
  },
  {
    id: 3,
    name: 'peach',
    href: '/admin/category/fruits/stone_fruits/peach',
  },
  {
    id: 4,
    name: 'peach UFO',
    href: '/admin/category/fruits/stone_fruits/peach_ufo',
  },
  {
    id: 5,
    name: 'plump ',
    href: '/admin/category/fruits/stone_fruits/plump',
  },
];
