import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { CategoryDto } from './dto/category.dto';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(categoryDto: CategoryDto): Promise<CategoryEntity> {
    const existCategory = await this.categoryRepository.findOneBy({
      name: categoryDto.name,
    });

    if (existCategory) {
      throw new HttpException('Category exists', HttpStatus.BAD_REQUEST);
    }

    const newCategory = await this.categoryRepository.create(categoryDto);
    return await this.categoryRepository.save(newCategory);
  }

  findAll(): Promise<CategoryEntity[]> {
    return this.categoryRepository.find();
  }

  findOne(id: string): Promise<CategoryEntity> {
    return this.categoryRepository.findOneBy({
      id,
    });
  }

  async update(id: string, categoryDto: CategoryDto): Promise<CategoryDto> {
    const category = await this.findOne(id);

    if (!category) {
      throw new HttpException('Category missing', HttpStatus.BAD_REQUEST);
    }

    return await this.categoryRepository.save({
      ...category,
      ...categoryDto,
    });
  }

  async delete(id: string) {
    const category = await this.findOne(id);

    if (!category) {
      throw new HttpException('Category missing', HttpStatus.BAD_REQUEST);
    }

    return await this.categoryRepository.delete(id);
  }
}
