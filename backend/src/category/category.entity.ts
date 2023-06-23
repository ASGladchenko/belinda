import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ProductEntity } from '../product/product.entity';

@Entity('categories')
export class CategoryEntity {
  @ApiProperty({ example: 'c77184ec-a8d2-4d29-bdd3-08202b6bce54' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ uniqueItems: true, example: 'Fruits' })
  @Column({ unique: true })
  name: string;

  @ApiProperty({ uniqueItems: true, example: 'Фрукти' })
  @Column({ unique: true })
  name_ua: string;

  @OneToMany(() => ProductEntity, (product) => product.category_id)
  products: ProductEntity[];
}
