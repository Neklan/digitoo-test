import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { MembershipModule } from 'src/membership/membership.module';
import { MembershipService } from 'src/membership/membership.service';
import { UserModule } from './user.module';
import { UserService } from './user.service';

describe('UsersService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule, MembershipModule],
      providers: [UserService, MembershipService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
