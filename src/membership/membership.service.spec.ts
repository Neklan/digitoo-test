import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTypeORMConfig } from 'src/config/index.config';
import { MembershipModule } from './membership.module';
import { MembershipService } from './membership.service';

describe('MembershipService', () => {
  let service: MembershipService;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(TestTypeORMConfig), MembershipModule],
      providers: [MembershipService],
    }).compile();
    app = module.createNestApplication();
    await app.init();
    service = app.get<MembershipService>(MembershipService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
