import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { MembershipModule } from './membership/membership.module';
import { MembershipService } from './membership/membership.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, UserModule, MembershipModule],
      controllers: [AppController],
      providers: [AppService, UserService, MembershipService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
