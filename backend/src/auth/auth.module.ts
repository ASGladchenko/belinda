import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { RoleEntity } from './role.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([RoleEntity]),
    JwtModule.register({ secret: process.env.SECRET_KEY }),
  ],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
