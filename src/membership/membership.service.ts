import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
}
