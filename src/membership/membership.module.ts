import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipEntity } from './membership.entity';
import { MembershipService } from './membership.service';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipEntity])],
  providers: [MembershipService],
  exports: [TypeOrmModule],
})
export class MembershipModule {}
