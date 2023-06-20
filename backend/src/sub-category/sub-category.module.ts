import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubCategoryEntity } from './sub-category.entity';
import { SubCategoryService } from './sub-category.service';
import { SubCategoryController } from './sub-category.controller';

@Module({
  controllers: [SubCategoryController],
  providers: [SubCategoryService],
  imports: [
    TypeOrmModule.forFeature([SubCategoryEntity]),
    JwtModule.register({ secret: process.env.SECRET_KEY }),
  ],
})
export class SubCategoryModule {}
