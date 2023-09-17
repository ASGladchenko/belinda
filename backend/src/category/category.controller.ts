import {
  Get,
  Put,
  Post,
  Body,
  Query,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Controller,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiQuery,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { AuthGuard } from '../guards';
import { CategoryDto } from './dto/category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { GetLanguage, LanguageType } from '../decorators';

@ApiTags('Categories')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  // @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get categories' })
  @ApiOkResponse({
    type: [CategoryEntity],
    description: 'OK',
  })
  async findAll(@GetLanguage() lang: LanguageType): Promise<CategoryEntity[]> {
    return this.categoryService.findAll(lang);
  }

  // @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get category by id' })
  @ApiQuery({ name: 'isEdit', type: 'boolean', required: false })
  @ApiOkResponse({
    type: CategoryEntity,
    description: 'OK',
  })
  findOne(
    @Param('id') id: string,
    @GetLanguage() lang: LanguageType,
    @Query('isEdit') isEdit?: string,
  ): Promise<CategoryEntity> {
    return this.categoryService.findOne(id, lang, isEdit);
  }

  // @UseGuards(AuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create category' })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  @ApiCreatedResponse({
    type: CategoryEntity,
    description: 'CREATED',
  })
  async create(@Body() categoryDto: CategoryDto): Promise<CategoryEntity> {
    return this.categoryService.create(categoryDto);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update category' })
  @ApiOkResponse({
    type: CategoryEntity,
    description: 'OK',
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async update(
    @Param('id') id: string,
    @Body() categoryDto: CategoryDto,
  ): Promise<CategoryEntity> {
    return this.categoryService.update(id, categoryDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete category' })
  async delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
