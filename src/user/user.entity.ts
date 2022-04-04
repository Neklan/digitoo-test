import { BaseEntity } from 'src/base.entity';
import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { MembershipEntity } from '../membership/membership.entity';

@Entity({ name: 'user', schema: 'public' })
export class UserEntity extends BaseEntity {
  @OneToOne(() => MembershipEntity)
  @JoinColumn()
  membership: MembershipEntity;

  // @Column('integer')
  // membershipId: number;

  @Column('varchar', { length: 50, unique: true })
  email: string;

  @Column('varchar', { length: 20 })
  first_name: string;

  @Column('varchar', { length: 20 })
  last_name: string;

  @Column('date')
  birthday: string;
}
