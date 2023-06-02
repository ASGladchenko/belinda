import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from './connection';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...Connection,
      synchronize: false,
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
