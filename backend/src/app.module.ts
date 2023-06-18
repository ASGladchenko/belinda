import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from './connection';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { SubCategoryModule } from './sub-category/sub-category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...Connection,
      synchronize: false,
      autoLoadEntities: true,
    }),
    AuthModule,
    CategoryModule,
    SubCategoryModule,
  ],
})
export class AppModule {}
