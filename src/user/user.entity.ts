import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { MembershipEntity } from '../membership/membership.entity';

@Entity({ name: 'user', schema: 'public' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment') id: number;

  @OneToOne(() => MembershipEntity)
  @JoinColumn({ name: '_membership', referencedColumnName: 'id' })
  _membership: number;

  @Column('char', { length: 50, unique: true })
  email: string;

  @Column('char', { length: 50 })
  first_name: string;

  @Column('char', { length: 50 })
  last_name: string;

  @Column('date')
  birthday: string;
}
