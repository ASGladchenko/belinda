interface ICategory {
  id: string;
  name: string;
  name_ua: string;
}

export const getCategoryId = (categories: ICategory[], name: string) => {
  return { id: categories.find((category) => category.name === name) };
};
