import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CreateUserDto {
  @Field() readonly id?: number;
  @Field() readonly _membership: number;
  @Field() readonly email: string;
  @Field() readonly first_name: string;
  @Field() readonly last_name: string;
  @Field() readonly birthday: string;
}
