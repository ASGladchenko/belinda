import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsNotEmpty, IsOptional } from 'class-validator';

import { IsCustomArray } from '../../pipes/class-validator/customArrayValidator';
import { IsThreeLetterMonth } from '../../pipes/class-validator/threeLetterMonthValidator';

export class ProductServiceDto {
  @ApiProperty({ uniqueItems: true, example: 'Fruits' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Мінімум 2 символи',
  })
  name: string;

  @ApiProperty({ uniqueItems: true, example: 'Фрукти' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Min 2 symbols',
  })
  name_ua: string;

  @ApiProperty({ example: 'Description', required: false })
  @IsOptional()
  @IsString()
  @MinLength(2, {
    message: 'Мінімум 2 символи',
  })
  description?: string;

  @ApiProperty({ example: 'Опис', required: false })
  @IsOptional()
  @IsString()
  @MinLength(2, {
    message: 'Min 2 symbols',
  })
  description_ua?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  img_url?: string;

  @ApiProperty({ example: ['jan', 'may', 'oct', 'dec'], required: false })
  @IsOptional()
  @IsCustomArray()
  @IsThreeLetterMonth({ each: true })
  months?: string[];

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  categoryId: string;
}
