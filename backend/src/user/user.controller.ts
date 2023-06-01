import { ApiTags } from '@nestjs/swagger';
import { Body, Controller } from '@nestjs/common';
import { HttpCode, Post } from '@nestjs/common/decorators';

import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('registration')
  async create(@Body() body: UserDto): Promise<UserEntity> {
    return await this.userService.create(body);
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() body: UserDto): Promise<UserEntity> {
    return await this.userService.login(body);
  }
}
