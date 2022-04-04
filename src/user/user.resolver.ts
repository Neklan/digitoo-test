import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { InputUser } from './inputs/user.input';
import { GetUsersARgs } from './args/users.args';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserDto])
  async users(@Args() args: GetUsersARgs) {
    return this.userService.getUsers(args);
  }

  @Mutation(() => UserDto)
  async createUser(@Args('data') data: InputUser) {
    return this.userService.createUser(data);
  }
}
