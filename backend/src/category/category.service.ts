import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { LanguageType } from '../decorators';
import { CategoryDto } from './dto/category.dto';
import { FileService } from '../file/file.service';
import { CategoryEntity } from './category.entity';
import { DuplicateService } from '../duplicate/duplicate.service';
import { getArrayByLanguage, getObjectByLanguage } from './../utils';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    private duplicateService: DuplicateService,
    private fileService: FileService,
  ) {}

  async findAll(lang: LanguageType): Promise<CategoryEntity[]> {
    const categories = await this.categoryRepository.find({
      relations: { products: true },
    });

    if (categories.length === 0) {
      throw new HttpException('Categories not found', HttpStatus.BAD_REQUEST);
    }

    return getArrayByLanguage(categories, lang);
  }

  async findOne(id: string, lang?: LanguageType): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOneBy({
      id,
    });

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    if (lang) {
      return getObjectByLanguage(category, lang);
    }

    return category;
  }

  async create(categoryDto: CategoryDto): Promise<CategoryEntity> {
    await this.duplicateService.check(this.categoryRepository, {
      name_en: categoryDto.name_en,
      name_ua: categoryDto.name_ua,
    });

    const newCategory = await this.categoryRepository.create(categoryDto);
    return await this.categoryRepository.save(newCategory);
  }

  async update(id: string, categoryDto: CategoryDto): Promise<CategoryEntity> {
    const category = await this.findOne(id);

    const fieldsToCheck = {};

    if (category.name_en !== categoryDto.name_en) {
      fieldsToCheck['name_en'] = categoryDto.name_en;
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
