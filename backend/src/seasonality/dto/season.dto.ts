import { ApiProperty } from '@nestjs/swagger';

import { LanguageType } from '../../decorators/language.decorator';

export class SeasonDto {
  @ApiProperty({ example: 'name' })
  name: string;

  @ApiProperty({ example: ['jan', 'may', 'oct', 'dec'] })
  months: LanguageType[];
}
