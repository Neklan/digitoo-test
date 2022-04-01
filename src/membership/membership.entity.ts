import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'membership', schema: 'public' })
export class MembershipEntity {
  @PrimaryGeneratedColumn('increment') id: number;

  @Column('char', { length: 50, unique: true })
  type: string;

  @Column('timestamp with time zone')
  createdAt: string;
}
