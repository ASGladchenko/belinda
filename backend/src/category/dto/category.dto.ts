import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CategoryDto {
  @ApiProperty({ uniqueItems: true, example: 'Fruits' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Min 2 symbols',
  })
  name_en: string;

  @ApiProperty({ uniqueItems: true, example: 'Фрукти' })
  @IsNotEmpty()
  @IsString()
  @MinLength(2, {
    message: 'Мінімум 2 символи',
  })
  name_ua: string;
}
