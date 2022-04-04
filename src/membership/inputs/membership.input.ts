import { InputType, Field } from '@nestjs/graphql';
import { MembershipType } from '../enums/membership.enum';

@InputType()
export class InputMembership {
  @Field(() => MembershipType)
  readonly typeName: MembershipType;
}
