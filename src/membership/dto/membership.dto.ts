import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MembershipDto {
  @Field(() => Int) readonly id?: number;
  @Field() readonly type: string;
  @Field() readonly createdAt: string;
}
