import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class MembershipEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column('char', { length: 50, unique: true })
  type: string;

  @Column('timestamp with time zone')
  createdAt: string;
}
