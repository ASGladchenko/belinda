export interface IProductCard {
  id: string;
  img: string;
  key?: string;
  name: string;
  seasonality: string[];
  translatedMonths: IMonths[];
}

export interface IClientCategory {
  months: IMonths[];
  categoryId: string;
}

export interface IProduct {
  id: string;
  name: string;
  img_url: string;
  months: string[];
}

export interface IMonths {
  name: string;
  value: string;
}
