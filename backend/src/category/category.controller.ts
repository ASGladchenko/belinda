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
import { CategoryDto } from './dto/category.dto';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';

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
  async findAll() {
    return this.categoryService.findAll();
  }

  // @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get category by id' })
  @ApiOkResponse({
    type: CategoryEntity,
    description: 'OK',
  })
  findOne(@Param('id') id: string): Promise<CategoryEntity> {
    return this.categoryService.findOne(id);
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
  async create(@Body() categoryDto: CategoryDto) {
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
  ): Promise<CategoryDto> {
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
