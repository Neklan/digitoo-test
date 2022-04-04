import { Field, Int, ObjectType } from '@nestjs/graphql';
import { MembershipDto } from 'src/membership/dto/membership.dto';

@ObjectType()
export class UserDto {
  @Field(() => Int) readonly id?: number;
  @Field(() => MembershipDto) readonly membership?: MembershipDto;
  @Field() readonly email: string;
  @Field() readonly first_name: string;
  @Field() readonly last_name: string;
  @Field() readonly birthday: string;
}
