import { FileInterceptor } from '@nestjs/platform-express';
import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Query,
  Delete,
  HttpCode,
  UseGuards,
  Controller,
  HttpStatus,
  UploadedFile,
  HttpException,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiTags,
  ApiQuery,
  ApiConsumes,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { AuthGuard } from '../guards';
import { ProductDto } from './dto/product.dto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
import { postProperty, putProperty } from './config';
import { UpdateProductDto } from './dto/update.product.dto';
import { UpdateProductServiceDto } from './dto/update..product.service.dto';

@ApiTags('Products')
@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // @UseGuards(AuthGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get products' })
  @ApiQuery({ name: 'categoryId', type: 'string' })
  @ApiOkResponse({
    type: [ProductEntity],
    description: 'OK',
  })
  async findAll(
    @Query('categoryId') categoryId: string,
  ): Promise<ProductEntity[]> {
    return this.productService.findAll(categoryId);
  }

  // @UseGuards(AuthGuard)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get product by id' })
  @ApiOkResponse({
    type: ProductEntity,
    description: 'OK',
  })
  findOne(@Param('id') id: string): Promise<ProductEntity> {
    return this.productService.findOne(id);
  }

  // @UseGuards(AuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create product' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: postProperty,
      required: ['name', 'name_ua', 'categoryId'],
    },
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  @ApiCreatedResponse({
    type: ProductEntity,
    description: 'CREATED',
  })
  @UseInterceptors(FileInterceptor('img_url'))
  async create(
    @Body() productDto: ProductDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ProductEntity> {
    const newProduct = { ...productDto };

    if (productDto.months) {
      try {
        newProduct.months = JSON.parse(productDto.months as string);
      } catch (error) {
        throw new HttpException('JSON is not valid', HttpStatus.BAD_REQUEST);
      }
    }

    return this.productService.create(newProduct, file);
  }

  // @UseGuards(AuthGuard)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Update product' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: putProperty,
      required: ['name', 'name_ua'],
    },
  })
  @ApiOkResponse({
    type: ProductEntity,
    description: 'OK',
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  @UseInterceptors(FileInterceptor('img_url'))
  async update(
    @Param('id') id: string,
    @Body() productDto: UpdateProductDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<ProductEntity> {
    const newProduct = { ...productDto } as UpdateProductServiceDto;

    if (productDto.months) {
      try {
        newProduct.months = JSON.parse(productDto.months as string);
      } catch (error) {
        throw new HttpException('JSON is not valid', HttpStatus.BAD_REQUEST);
      }
    }

    return this.productService.update(id, newProduct, file);
  }

  // @UseGuards(AuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete product' })
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
