import { BaseEntity } from 'src/base.entity';
import { UserEntity } from 'src/user/user.entity';
import { Entity, Column, OneToOne } from 'typeorm';
import { MembershipType } from './enums/membership.enum';

@Entity({ name: 'membership', schema: 'public' })
export class MembershipEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: MembershipType,
    default: MembershipType.basic,
  })
  typeName: MembershipType;

  @OneToOne(() => UserEntity, (user) => user.membershipConnection)
  userConnection: Promise<UserEntity>;
}
