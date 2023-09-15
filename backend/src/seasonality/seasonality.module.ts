import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeasonalityService } from './seasonality.service';
import { ProductEntity } from './../product/product.entity';
import { SeasonalityController } from './seasonality.controller';

@Module({
  controllers: [SeasonalityController],
  providers: [SeasonalityService],
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    JwtModule.register({ secret: process.env.SECRET_KEY }),
  ],
})
export class SeasonalityModule {}
