export interface IProductCard {
  id: string;
  img: string;
  name: string;
  seasonality: string[];
}

export interface IClientCategory {
  params: {
    categoryId: string;
  };
}
