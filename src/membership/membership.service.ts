import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MembershipType } from './enums/membership.enum';
import { InputMembership } from './inputs/membership.input';
import { MembershipEntity } from './membership.entity';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(MembershipEntity)
    private readonly MembershipRepository: Repository<MembershipEntity>,
  ) {}

  async getMembershipById(id: number) {
    return await this.MembershipRepository.findOneBy({ id });
  }

  async findMembershipByType(type: string) {
    return await this.MembershipRepository.findOneBy({ type });
  }

  async getMemberships() {
    return await this.MembershipRepository.find();
  }

  async createMembership(data: InputMembership): Promise<MembershipEntity> {
    const membership = new MembershipEntity();
    membership.type = MembershipType[data.type];
    membership.createdAt = new Date().toISOString();
    await this.MembershipRepository.save(membership);
    return membership;
  }

  async truncate() {
    this.MembershipRepository.delete({});
  }
}
