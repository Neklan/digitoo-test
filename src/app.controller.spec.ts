import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { TestTypeORMConfig } from './config/index.config';
import { MembershipEntity } from './membership/membership.entity';
import { MembershipModule } from './membership/membership.module';
import { MembershipService } from './membership/membership.service';
import { UserEntity } from './user/user.entity';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forFeature([UserEntity, MembershipEntity]),
        TypeOrmModule.forRoot(TestTypeORMConfig),
        AppModule,
        UserModule,
        MembershipModule,
      ],
      controllers: [AppController],
      providers: [AppService, UserService, MembershipService],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  afterAll(async () => {
    await app.close();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('purge', () => {
    it('should purge all items in db"', async () => {
      expect((await appService.purgeDb()).length).toBe(2);
    });
  });
});
