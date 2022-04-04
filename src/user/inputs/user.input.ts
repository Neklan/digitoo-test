import { InputType, Field } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsEnum, MaxLength } from 'class-validator';
import { MembershipType } from 'src/membership/enums/membership.enum';

@InputType()
export class InputUser {
  @ApiProperty()
  @Field()
  @IsEmail()
  readonly email: string;

  @ApiProperty()
  @Field()
  @MaxLength(20)
  readonly first_name: string;

  @ApiProperty()
  @Field()
  @MaxLength(20)
  readonly last_name: string;

  @ApiProperty()
  @Field()
  @IsDateString(null, {
    message: 'Date must be in format YYYY-MM-DD',
  })
  readonly birthday: string;

  @ApiProperty()
  @Field(() => MembershipType)
  @IsEnum(MembershipType)
  readonly type: MembershipType;
}
