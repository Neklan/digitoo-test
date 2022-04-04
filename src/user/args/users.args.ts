import { IsDateString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';
import { MembershipType } from 'src/membership/enums/membership.enum';

@ArgsType()
export class GetUsersARgs {
  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  birthday?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => MembershipType, { nullable: true })
  @IsEnum(MembershipType)
  @IsOptional()
  membership?: MembershipType;
}
