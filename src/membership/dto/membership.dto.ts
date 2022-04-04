import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { MembershipType } from '../enums/membership.enum';

registerEnumType(MembershipType, {
  name: 'MembershipType',
});

@ObjectType()
export class MembershipDto {
  @Field(() => Int) readonly id?: number;
  @Field() readonly typeName: string;
  @Field() readonly createdAt: string;
}
