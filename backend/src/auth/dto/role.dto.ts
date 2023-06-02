import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RoleDto {
  @ApiProperty({ uniqueItems: true, example: 'admin' })
  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 16, { message: 'Min 4 and Max 16 symbols' })
  @ApiProperty({ example: '1234', minimum: 4, maximum: 16 })
  password: string;
}
