import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductEntity } from './../product/product.entity';
import { LanguageType } from './../decorators/language.decorator';

@Injectable()
export class SeasonalityService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async findAll(lang: LanguageType) {
    console.log(lang);
    return 'getArrayByLanguage(products, lang)';
  }
}
