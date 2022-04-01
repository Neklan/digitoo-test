import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { MembershipModule } from './membership.module';
import { MembershipService } from './membership.service';

describe('MembershipService', () => {
  let service: MembershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule, MembershipModule],
      providers: [MembershipService, UserService],
    }).compile();

    service = module.get<MembershipService>(MembershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
