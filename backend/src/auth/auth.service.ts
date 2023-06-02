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

  async create(dto: RoleDto): Promise<any> {
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

  async logout(tokens: DecodedToken) {
    await this.updateRefreshToken(tokens.id, null);
    return true;
  }

  async refresh(decodedToken: DecodedToken): Promise<Tokens> {
    const roleAdmin = await this.roleRepository.findOneBy({
      id: decodedToken.id,
    });

    if (!roleAdmin.refresh_token) throw new ForbiddenException();

    const newTokens = await this.getTokens(decodedToken.id, decodedToken.role);

    return {
      access_token: newTokens.access_token,
      refresh_token: roleAdmin.refresh_token,
    };
  }

  private async hashData(password: string) {
    return await bcrypt.hash(password, Number(process.env.SALT));
  }

  private async getTokens(id: string, role: string): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync({ id, role }, { expiresIn: 60 * 3 }),
      this.jwtService.signAsync({ id, role }, { expiresIn: 60 * 10 }),
    ]);

    return { access_token: at, refresh_token: rt };
  }

  private async updateRefreshToken(id: string, rt: string | null) {
    await this.roleRepository
      .createQueryBuilder()
      .update(RoleEntity)
      .set({ refresh_token: rt })
      .where('id = :id', { id })
      .execute();
  }
}
