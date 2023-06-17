import {
  Body,
  Post,
  HttpCode,
  UseGuards,
  Controller,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthGuard } from '../guards';
import { GetToken } from '../decorators';
import { RoleDto } from './dto/role.dto';
import { RoleEntity } from './role.entity';
import { AuthService } from './auth.service';
import { DecodedToken, Tokens } from './types';
import { NotFoundResponse } from './dto/notfound.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create admin only' })
  @ApiCreatedResponse({
    type: RoleDto,
    description: 'CREATED',
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async create(@Body() dto: RoleDto) {
    return this.authService.create(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: RoleEntity,
    description: 'OK',
  })
  @ApiNotFoundResponse({ type: NotFoundResponse, description: 'NOT FOUND' })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async login(@Body() dto: RoleDto): Promise<Tokens> {
    return this.authService.login(dto);
  }

  @UseGuards(AuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async logout(@GetToken() decodedToken: DecodedToken): Promise<boolean> {
    return this.authService.logout(decodedToken);
  }

  @UseGuards(AuthGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'OK',
  })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiBadRequestResponse({ description: 'BAD REQUEST' })
  async refresh(@GetToken() decodedToken: DecodedToken): Promise<Tokens> {
    return await this.authService.refresh(decodedToken);
  }
}
