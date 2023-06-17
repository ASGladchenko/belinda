import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryEntity } from './category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    JwtModule.register({ secret: process.env.SECRET_KEY }),
  ],
})
export class CategoryModule {}
