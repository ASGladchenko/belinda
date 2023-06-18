import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('categories')
export class CategoryEntity {
  @ApiProperty({ example: 'c77184ec-a8d2-4d29-bdd3-08202b6bce54' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ uniqueItems: true, example: 'pineapple' })
  @Column()
  name: string;
}
