import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CategoryEntity } from '../category/category.entity';

@Entity('products')
export class ProductEntity {
  @ApiProperty({ example: 'c77184ec-a8d2-4d29-bdd3-08202b6bce54' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ uniqueItems: true, example: 'Яблуко' })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ uniqueItems: true, example: 'Apple' })
  @Column({ unique: true })
  name_ua: string;

  @ApiProperty({ example: 'Опис', required: false })
  @Column({ nullable: true })
  description?: string;

  @ApiProperty({ example: 'Description', required: false })
  @Column({ nullable: true })
  description_ua?: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  img_url?: string;

  @ApiProperty({ example: "['jan', 'may', 'oct', 'dec']", required: false })
  @Column('text', { array: true, nullable: true })
  months?: string[];

  @ManyToOne(() => CategoryEntity, (category) => category.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category_id: CategoryEntity;
}
