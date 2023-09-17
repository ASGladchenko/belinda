import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { getArrayByLanguage } from '../utils';
import { ProductEntity } from './../product/product.entity';
import { LanguageType } from './../decorators/language.decorator';
import { IProductByLanguage } from './types';

@Injectable()
export class SeasonalityService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(lang: LanguageType) {
    const products = await this.productRepository.find();

    const productByLanguage: IProductByLanguage[] = getArrayByLanguage(
      products,
      lang,
    );

    const prepared = productByLanguage.map((product) => ({
      id: product.id,
      name: product.name,
      months: product.months,
    }));

    const sorted = prepared.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });

    return sorted;
  }
}
