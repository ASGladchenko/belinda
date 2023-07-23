import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { CategoryDto } from './dto/category.dto';
import { FileService } from '../file/file.service';
import { CategoryEntity } from './category.entity';
import { DuplicateService } from '../duplicate/duplicate.service';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    private duplicateService: DuplicateService,
    private fileService: FileService,
  ) {}

  async create(categoryDto: CategoryDto): Promise<CategoryEntity> {
    await this.duplicateService.check(this.categoryRepository, {
      name: categoryDto.name,
      name_ua: categoryDto.name_ua,
    });

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

    const fieldsToCheck = {};

    if (category.name !== categoryDto.name) {
      fieldsToCheck['name'] = categoryDto.name;
    }

    if (category.name_ua !== categoryDto.name_ua) {
      fieldsToCheck['name_ua'] = categoryDto.name_ua;
    }

    if (Object.keys(fieldsToCheck).length > 0) {
      await this.duplicateService.check(
        this.categoryRepository,
        fieldsToCheck,
        id,
      );
    }

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
