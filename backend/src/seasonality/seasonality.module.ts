import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeasonalityService } from './seasonality.service';
import { ProductEntity } from './../product/product.entity';
import { SeasonalityController } from './seasonality.controller';

@Module({
  controllers: [SeasonalityController],
  providers: [SeasonalityService],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
})
export class SeasonalityModule {}
