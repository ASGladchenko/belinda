import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(dto: UserDto): Promise<UserEntity> {
    const user = await this.usersRepository.save(dto);
    return user;
  }

  async login({ name }: UserDto): Promise<UserEntity> {
    return await this.usersRepository.findOneBy({ name });
  }
}
