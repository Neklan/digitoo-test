import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipEntity } from './membership.entity';
import { MembershipResolver } from './membership.resolver';
import { MembershipService } from './membership.service';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipEntity])],
  providers: [MembershipResolver, MembershipService],
  exports: [TypeOrmModule],
})
export class MembershipModule {}
