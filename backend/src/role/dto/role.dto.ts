import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({ uniqueItems: true, example: 'admin' })
  role: string;

  @ApiProperty({ example: '1234', minimum: 3, maximum: 16 })
  password: string;
}
