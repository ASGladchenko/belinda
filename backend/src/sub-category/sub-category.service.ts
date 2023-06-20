import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

import { SubCategoryDto } from './dto/sub-category.dto';
import { SubCategoryEntity } from './sub-category.entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategoryEntity)
    private subCategoryRepository: Repository<SubCategoryEntity>,
  ) {}

  async create(subCategoryDto: SubCategoryDto): Promise<SubCategoryEntity> {
    const existSubCategory = await this.subCategoryRepository.findOneBy({
      name: subCategoryDto.name,
    });

    if (existSubCategory) {
      throw new HttpException('Subcategory exists', HttpStatus.BAD_REQUEST);
    }

    const newSubCategory = await this.subCategoryRepository.create(
      subCategoryDto,
    );

    return this.subCategoryRepository.save(newSubCategory);
  }

  findAll(): Promise<SubCategoryEntity[]> {
    return this.subCategoryRepository.find();
  }

  findOne(id: string): Promise<SubCategoryEntity> {
    return this.subCategoryRepository.findOneBy({
      id,
    });
  }

  async update(
    id: string,
    subCategoryDto: SubCategoryDto,
  ): Promise<SubCategoryDto> {
    const subCategory = await this.findOne(id);

    if (!subCategory) {
      throw new HttpException('Subcategory missing', HttpStatus.BAD_REQUEST);
    }

    return await this.subCategoryRepository.save({
      ...subCategory,
      ...subCategoryDto,
    });
  }

  async delete(id: string) {
    const subCategory = await this.findOne(id);

    if (!subCategory) {
      throw new HttpException('Subcategory missing', HttpStatus.BAD_REQUEST);
    }

    return this.subCategoryRepository.delete(id);
  }
}
