export interface IProductCard {
  id: string;
  key?: string;
  img: string;
  name: string;
  seasonality: string[];
}

export interface IClientCategory {
  categoryId: string;
}

export interface IProduct {
  id: string;
  name: string;
  img_url: string;
  months: string[];
}
