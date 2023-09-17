import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { SeasonDto } from './dto/season.dto';
import { SeasonalityService } from './seasonality.service';
import { GetLanguage, LanguageType } from './../decorators/language.decorator';

@ApiTags('Seasonality')
@Controller('seasonality')
export class SeasonalityController {
  constructor(private readonly seasonalityService: SeasonalityService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Seasonality' })
  @ApiOkResponse({
    type: [SeasonDto],
    description: 'OK',
  })
  async findAll(@GetLanguage() lang: LanguageType) {
    return this.seasonalityService.findAll(lang);
  }
}
