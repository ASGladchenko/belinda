import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { LanguageType } from '../decorators';
import { ProductDto } from './dto/product.dto';
import { ProductEntity } from './product.entity';
import { FileService } from '../file/file.service';
import { ProductServiceDto } from './dto/product.service.dto';
import { CategoryService } from '../category/category.service';
import { DuplicateService } from '../duplicate/duplicate.service';
import { UpdateProductServiceDto } from './dto/update.product.service.dto';
import {
  sortedMonths,
  getArrayByLanguage,
  getObjectByLanguage,
} from '../utils';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    private categoryService: CategoryService,
    private duplicateService: DuplicateService,
    private fileService: FileService,
  ) {}

  async findAll(
    categoryId: string,
    lang: LanguageType,
  ): Promise<ProductEntity[]> {
    const products = await this.productRepository.find({
      where: { category_id: { id: categoryId } },
    });

    if (products?.length === 0) {
      throw new HttpException('Products not found', HttpStatus.BAD_REQUEST);
    }

    return getArrayByLanguage(products, lang);
  }

  async findOne(
    id: string,
    lang?: LanguageType,
    isEdit?: boolean,
  ): Promise<ProductEntity> {
    const product = await this.productRepository.findOneBy({
      id,
    });

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);
    }

    if (isEdit) {
      return product;
    }

    if (lang) {
      return getObjectByLanguage(product, lang);
    }

    return product;
  }

  async create(
    productDto: ProductServiceDto | ProductDto,
    file: Express.Multer.File,
  ) {
    const { categoryId, ...product } = productDto;

    const category = await this.categoryService.findOne(categoryId);

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    await this.duplicateService.check(this.productRepository, {
      name_en: productDto.name_en,
      name_ua: productDto.name_ua,
    });

    if (file) {
      const imgUrl = await this.fileService.create(file);
      product.img_url = imgUrl as string;
    }

    if (Array.isArray(productDto.months)) {
      productDto.months = sortedMonths(productDto.months);
    }

    const newProduct = await this.productRepository.create(
      product as ProductServiceDto,
    );
    newProduct.category_id = category;

    return this.productRepository.save(newProduct);
  }

  async update(
    id: string,
    productDto: UpdateProductServiceDto,
    file: Express.Multer.File,
  ): Promise<ProductEntity> {
    const product = await this.findOne(id);

    const fieldsToCheck = {};

    if (product.name_en !== productDto.name_en) {
      fieldsToCheck['name_en'] = productDto.name_en;
    }

    if (product.name_ua !== productDto.name_ua) {
      fieldsToCheck['name_ua'] = productDto.name_ua;
    }

    if (Object.keys(fieldsToCheck).length > 0) {
      await this.duplicateService.check(
        this.productRepository,
        fieldsToCheck,
        id,
      );
    }

    if (Array.isArray(productDto.months)) {
      productDto.months = sortedMonths(productDto.months);
    }

    if (file) {
      const imgUrl = await this.fileService.create(file);
      productDto.img_url = imgUrl;
    }

    if (!file && product.img_url) {
      await this.fileService.delete(product.img_url);
    }

    return await this.productRepository.save({
      ...product,
      ...productDto,
    });
  }

  async delete(id: string) {
    const product = await this.findOne(id);

    if (product.img_url) {
      await this.fileService.delete(product.img_url);
    }

    return this.productRepository.delete(id);
  }
}
