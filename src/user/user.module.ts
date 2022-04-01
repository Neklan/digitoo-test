import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipEntity } from 'src/membership/membership.entity';
import { MembershipService } from 'src/membership/membership.service';
import { UserEntity } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, MembershipEntity])],
  providers: [UserResolver, UserService, MembershipService],
  exports: [TypeOrmModule],
})
export class UserModule {}
