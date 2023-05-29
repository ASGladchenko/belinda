import {
  Body,
  Post,
  HttpCode,
  Controller,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

import { RoleDto } from './dto/role.dto';
import { RoleEntity } from './role.entity';
import { RoleService } from './role.service';
import { NotFoundResponse } from './dto/notfound.dto';

@ApiTags('Role')
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create admin only' })
  @ApiCreatedResponse({
    type: RoleDto,
    description: 'CREATED',
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async create(@Body() { role, password }: RoleDto): Promise<RoleEntity> {
    const roleAdmin = this.roleService.getRole(role);
    if (roleAdmin) {
      throw new HttpException('Admin exists', HttpStatus.BAD_REQUEST);
    }
    return await this.roleService.create({ role, password });
  }

  @Post()
  @HttpCode(200)
  @ApiOkResponse({
    type: RoleEntity,
    description: 'OK',
  })
  @ApiNotFoundResponse({ type: NotFoundResponse, description: 'NOT FOUND' })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async login(@Body() body: RoleDto): Promise<RoleEntity> {
    return await this.roleService.login(body);
  }
}
