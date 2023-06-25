import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductEntity } from './product.entity';
import { FileModule } from '../file/file.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { CategoryModule } from '../category/category.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    JwtModule.register({ secret: process.env.SECRET_KEY }),
    FileModule,
    CategoryModule,
  ],
})
export class ProductModule {}
