import { BaseEntity } from 'src/base.entity';
import { Entity, Column, JoinColumn, OneToOne } from 'typeorm';
import { MembershipEntity } from '../membership/membership.entity';

@Entity({ name: 'user', schema: 'public' })
export class UserEntity extends BaseEntity {
  @OneToOne(() => MembershipEntity, (membership) => membership.userConnection)
  @JoinColumn({ name: 'membershipId', referencedColumnName: 'id' })
  membershipConnection: Promise<MembershipEntity>;

  @Column('integer')
  membershipId: number;

  @Column('char', { length: 50, unique: true })
  email: string;

  @Column('char', { length: 50 })
  first_name: string;

  @Column('char', { length: 50 })
  last_name: string;

  @Column('date')
  birthday: string;
}
