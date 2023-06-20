import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CategoryDto {
  @ApiProperty({ uniqueItems: true, example: 'Фрукти' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Мінімум 2 символи',
  })
  name: string;

  @ApiProperty({ uniqueItems: true, example: 'Fruits' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Min 2 symbols',
  })
  name_en: string;

  @ApiProperty({ example: 'Опис', required: false })
  @IsString()
  @IsOptional()
  @MinLength(2, {
    message: 'Мінімум 2 символи',
  })
  description?: string;

  @ApiProperty({ example: 'Description', required: false })
  @IsString()
  @IsOptional()
  @MinLength(2, {
    message: 'Min 2 symbols',
  })
  description_en?: string;
}
