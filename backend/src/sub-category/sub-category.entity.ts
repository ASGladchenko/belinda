import { CategoryEntity } from './../category/category.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('sub_categories')
export class SubCategoryEntity {
  @ApiProperty({ example: 'c77184ec-a8d2-4d29-bdd3-08202b6bce54' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ uniqueItems: true, example: 'Фрукти' })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ uniqueItems: true, example: 'Fruits' })
  @Column({ unique: true })
  name_en: string;

  @ApiProperty({ example: 'Опис', required: false })
  @Column({ nullable: false })
  description: string;

  @ApiProperty({ example: 'Description', required: false })
  @Column({ nullable: false })
  description_en: string;

  @ManyToOne(() => CategoryEntity, (category) => category.subCategories)
  category: CategoryEntity;
}
