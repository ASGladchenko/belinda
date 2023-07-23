import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { UpdateProductDto } from './types';
import { ProductDto } from './dto/product.dto';
import { ProductEntity } from './product.entity';
import { FileService } from '../file/file.service';
import { CategoryService } from '../category/category.service';
import { DuplicateService } from '../duplicate/duplicate.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    private categoryService: CategoryService,
    private duplicateService: DuplicateService,
    private fileService: FileService,
  ) {}

  async create(productDto: ProductDto, file: Express.Multer.File) {
    const { categoryId, ...product } = productDto;

    const category = await this.categoryService.findOne(categoryId);

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    await this.duplicateService.check(this.productRepository, {
      name: productDto.name,
      name_ua: productDto.name_ua,
    });

    if (file) {
      const imgUrl = await this.fileService.create(file);
      product.img_url = imgUrl as string;
    }

    const newProduct = await this.productRepository.create(product);
    newProduct.category_id = category;

    return this.productRepository.save(newProduct);
  }

  async findAll(categoryId: string): Promise<ProductEntity[]> {
    const products = await this.productRepository.find({
      where: { category_id: { id: categoryId } },
    });

    if (products?.length === 0) {
      throw new HttpException('Products not found', HttpStatus.BAD_REQUEST);
    }

    return products;
  }

  async findOne(id: string): Promise<ProductEntity> {
    const product = await this.productRepository.findOneBy({
      id,
    });

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);
    }

    return product;
  }

  async update(
    id: string,
    productDto: UpdateProductDto,
    file: Express.Multer.File,
  ): Promise<ProductEntity> {
    const product = await this.findOne(id);

    const fieldsToCheck = {};

    if (product.name !== productDto.name) {
      fieldsToCheck['name'] = productDto.name;
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

    if (file) {
      const imgUrl = await this.fileService.create(file);
      productDto.img_url = imgUrl;
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
