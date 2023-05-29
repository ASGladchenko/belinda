import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { RoleDto } from './dto/role.dto';
import { RoleEntity } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>,
  ) {}

  async create(dto: RoleDto): Promise<RoleEntity> {
    const user = await this.roleRepository.save(dto);
    return user;
  }

  async login({ role }: RoleDto): Promise<RoleEntity> {
    return await this.roleRepository.findOneBy({ role });
  }
}
