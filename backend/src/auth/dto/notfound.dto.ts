import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty({
    default: 404,
  })
  status: number;

  @ApiProperty({
    default: 'Login not found',
  })
  message: string | string[];
}
