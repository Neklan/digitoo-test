import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { InputUser } from './inputs/user.input';
import { MembershipService } from 'src/membership/membership.service';
import { UserEntity } from './user.entity';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly membershipService: MembershipService,
  ) {}

  @Query(() => [UserDto])
  async users() {
    return this.userService.getUsers();
  }

  @Mutation(() => UserDto)
  async createUser(@Args('data') data: InputUser) {
    return this.userService.createUser(data);
  }

  @ResolveField()
  async _membership(@Parent() user: UserEntity) {
    const { _membership } = user;
    return this.membershipService.getMembershipById(_membership);
  }
}
