import * as path from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

import { Connection } from './connection';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { DuplicateModule } from './duplicate/duplicate.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TypeOrmModule.forRoot({
      ...Connection,
      synchronize: false,
      autoLoadEntities: true,
    }),
    AuthModule,
    CategoryModule,
    ProductModule,
    FileModule,
    DuplicateModule,
  ],
})
export class AppModule {}
