import {
  HttpStatus,
  Injectable,
  HttpException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { RoleDto } from './dto/role.dto';
import { RoleEntity } from './role.entity';
import { DecodedToken, Tokens } from './types';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
    private jwtService: JwtService,
  ) {}

  async create(dto: RoleDto): Promise<Tokens> {
    const roleAdmin = await this.roleRepository.findOneBy({ role: dto.role });

    if (roleAdmin) {
      throw new HttpException('Admin exists', HttpStatus.BAD_REQUEST);
    }

    if (dto.role !== 'admin') {
      throw new HttpException(
        'You can only create an administrator role',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hash = await this.hashData(dto.password);
    const { id, role } = await this.roleRepository.save({
      role: dto.role,
      password: hash,
    });

    const tokens = await this.getTokens(id, role);
    await this.updateRefreshToken(id, tokens.refresh_token);
    return tokens;
  }

  async login(dto: RoleDto): Promise<Tokens> {
    const roleAdmin = await this.roleRepository.findOneBy({ role: dto.role });
    if (!roleAdmin) throw new NotFoundException();

    const isMatches = await bcrypt.compare(dto.password, roleAdmin.password);
    if (!isMatches) throw new ForbiddenException();

    const tokens = await this.getTokens(roleAdmin.id, roleAdmin.role);
    await this.updateRefreshToken(roleAdmin.id, tokens.refresh_token);

    return tokens;
  }

  async refresh(decodedToken: DecodedToken): Promise<Tokens> {
    const roleAdmin = await this.findOne(decodedToken.id);

    if (!roleAdmin.refresh_token) throw new ForbiddenException();

    const { access_token } = await this.getTokens(
      decodedToken.id,
      decodedToken.role,
    );

    return {
      access_token,
      refresh_token: roleAdmin.refresh_token,
    };
  }

  async logout(): Promise<boolean> {
    const role = await this.roleRepository.findOneBy({
      role: 'admin',
    });
    await this.updateRefreshToken(role.id, null);
    return true;
  }
  findOne(id: string): Promise<RoleEntity> {
    return this.roleRepository.findOneBy({
      id,
    });
  }
  private async hashData(password: string) {
    return await bcrypt.hash(password, Number(process.env.SALT));
  }

  private async getTokens(id: string, role: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync({ id, role }, { expiresIn: 60 * 5 }),
      this.jwtService.signAsync({ id, role }, { expiresIn: 60 * 60 * 24 * 7 }),
    ]);

    return { access_token: at, refresh_token: rt };
  }

  private async updateRefreshToken(id: string, rt: string | null) {
    const roleAdmin = await this.findOne(id);

    await this.roleRepository.save({
      ...roleAdmin,
      refresh_token: rt,
    });
  }
}
