import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { CategoryDto } from './dto/category.dto';
import { FileService } from '../file/file.service';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    private fileService: FileService,
  ) {}

  async create(categoryDto: CategoryDto): Promise<CategoryEntity> {
    const existCategory = await this.categoryRepository
      .createQueryBuilder('product')
      .where('category.name = :name OR category.name_ua = :name_ua', {
        name: categoryDto.name,
        name_ua: categoryDto.name_ua,
      })
      .getOne();

    if (existCategory) {
      throw new HttpException('Category exists', HttpStatus.BAD_REQUEST);
    }

    const newCategory = await this.categoryRepository.create(categoryDto);
    return await this.categoryRepository.save(newCategory);
  }

  async findAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find({
      relations: { products: true },
    });

    if (categories.length === 0) {
      throw new HttpException('Categories not found', HttpStatus.BAD_REQUEST);
    }

    return categories;
  }

  async findOne(id: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOneBy({
      id,
    });

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    return category;
  }

  async update(id: string, categoryDto: CategoryDto): Promise<CategoryEntity> {
    const category = await this.findOne(id);

    return await this.categoryRepository.save({
      ...category,
      ...categoryDto,
    });
  }

  async delete(id: string) {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: ['products'],
    });

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    await this.fileService.deleteAll(category.products);

    return this.categoryRepository.delete(id);
  }
}
