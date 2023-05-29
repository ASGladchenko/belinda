import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class RoleEntity {
  @ApiProperty({ example: 'c77184ec-a8d2-4d29-bdd3-08202b6bce54' })
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ApiProperty({ example: 'admin' })
  @Column()
  role: string;

  @ApiProperty({ example: '1234' })
  @Column()
  password: string;
}
