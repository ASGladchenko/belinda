import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Controller,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { AuthGuard } from '../guards';
import { SubCategoryDto } from './dto/sub-category.dto';
import { SubCategoryEntity } from './sub-category.entity';
import { SubCategoryService } from './sub-category.service';

@ApiTags('Sub Categories')
@Controller('sub-category')
export class SubCategoryController {
  constructor(private subCategoryService: SubCategoryService) {}

  // @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get subcategories' })
  @ApiOkResponse({
    type: [SubCategoryEntity],
    description: 'OK',
  })
  async findAll() {
    return this.subCategoryService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get subcategory by id' })
  @ApiOkResponse({
    type: SubCategoryEntity,
    description: 'OK',
  })
  findOne(@Param('id') id: string): Promise<SubCategoryEntity> {
    return this.subCategoryService.findOne(id);
  }

  // @UseGuards(AuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create subcategory' })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  @ApiCreatedResponse({
    type: SubCategoryEntity,
    description: 'CREATED',
  })
  async create(@Body() subCategoryDto: SubCategoryDto) {
    return this.subCategoryService.create(subCategoryDto);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update subcategory' })
  @ApiOkResponse({
    type: SubCategoryEntity,
    description: 'OK',
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async update(
    @Param('id') id: string,
    @Body() subCategoryDto: SubCategoryDto,
  ): Promise<SubCategoryDto> {
    return this.subCategoryService.update(id, subCategoryDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete subcategory' })
  async delete(@Param('id') id: string) {
    return this.subCategoryService.delete(id);
  }
}
