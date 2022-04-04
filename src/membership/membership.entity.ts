import { BaseEntity } from 'src/base.entity';
import { Entity, Column } from 'typeorm';
import { MembershipType } from './enums/membership.enum';

@Entity({ name: 'membership', schema: 'public' })
export class MembershipEntity extends BaseEntity {
  @Column({
    type: 'enum',
    enum: MembershipType,
    default: MembershipType.basic,
  })
  typeName: MembershipType;
}
