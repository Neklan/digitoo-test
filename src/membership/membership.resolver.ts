import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { InputMembership } from './inputs/membership.input';
import { MembershipService } from 'src/membership/membership.service';
import { MembershipDto } from './dto/membership.dto';

@Resolver(() => MembershipDto)
export class MembershipResolver {
  constructor(private readonly membershipService: MembershipService) {}

  @Query(() => [MembershipDto])
  async users() {
    return this.membershipService.getMemberships();
  }

  @Mutation(() => MembershipDto)
  async createMembership(@Args('data') data: InputMembership) {
    return this.membershipService.createMembership(data);
  }
}
