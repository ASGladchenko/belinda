import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from './connection';
import { UserModule } from './user/user.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...Connection,
      synchronize: false,
      autoLoadEntities: true,
    }),
    UserModule,
    RoleModule,
  ],
})
export class AppModule {}
