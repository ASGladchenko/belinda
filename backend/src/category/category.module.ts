import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FileModule } from '../file/file.module';
import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DuplicateModule } from '../duplicate/duplicate.module';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    JwtModule.register({ secret: process.env.SECRET_KEY }),
    FileModule,
    DuplicateModule,
  ],
  exports: [CategoryService],
})
export class CategoryModule {}
