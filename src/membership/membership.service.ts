import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InputMembership } from './inputs/membership.input';
import { MembershipEntity } from './membership.entity';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipEntity)
    private readonly MembershipRepository: Repository<MembershipEntity>,
  ) {}

  async createMembership(data: InputMembership): Promise<MembershipEntity> {
    const membership = new MembershipEntity();
    membership.typeName = data.typeName;
    await this.MembershipRepository.save(membership);
    return membership;
  }

  async truncate() {
    this.MembershipRepository.delete({});
  }
}
