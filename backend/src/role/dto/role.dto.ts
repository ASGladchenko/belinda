import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({ example: 'admin' })
  role: string;

  @ApiProperty({ example: '1234', minimum: 3, maximum: 16 })
  password: string;
}
