import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { MembershipService } from './membership/membership.service';
import { MembershipModule } from './membership/membership.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gpl',
      driver: ApolloDriver,
    }),
    UserModule,
    MembershipModule,
  ],
  controllers: [AppController],
  providers: [AppService, UserService, MembershipService],
})
export class AppModule {}
