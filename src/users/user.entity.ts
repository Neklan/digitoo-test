import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { MembershipEntity } from './membership.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column('char', { length: 50, unique: true })
  email: string;

  @Column('char', { length: 50 })
  first_name: string;

  @Column('char', { length: 50 })
  last_name: string;

  @Column('date')
  birthday: string;

  @OneToOne(() => MembershipEntity)
  @JoinColumn()
  _membership: number;
}
