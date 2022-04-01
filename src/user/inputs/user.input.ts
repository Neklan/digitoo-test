import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class InputUser {
  // @Field() readonly _membership: number;
  @Field() readonly email: string;
  @Field() readonly first_name: string;
  @Field() readonly last_name: string;
  @Field() readonly birthday: string;
}
