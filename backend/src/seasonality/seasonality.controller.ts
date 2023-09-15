import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { SeasonalityService } from './seasonality.service';
import { GetLanguage, LanguageType } from './../decorators/language.decorator';

@Controller('seasonality')
export class SeasonalityController {
  constructor(private readonly seasonalityService: SeasonalityService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  // @ApiOperation({ summary: 'Get products' })
  // @ApiQuery({ name: 'categoryId', type: 'string' })
  // @ApiOkResponse({
  //   type: [ProductEntity],
  //   description: 'OK',
  // })
  async findAll(@GetLanguage() lang: LanguageType) {
    return this.seasonalityService.findAll(lang);
  }
}
