import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestTypeORMConfig } from 'src/config/index.config';
import { MembershipType } from 'src/membership/enums/membership.enum';
import { MembershipService } from 'src/membership/membership.service';
import { UserModule } from './user.module';
import { UserService } from './user.service';

const USER_DATA = {
  birthday: '1988-12-09',
  email: 'tomas.herma@gmail.com',
  first_name: 'Tomáš',
  last_name: 'Herma',
  type: MembershipType.profi,
};

describe('UsersService', () => {
  let userService: UserService;
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(TestTypeORMConfig), UserModule],
      providers: [UserService, MembershipService],
    }).compile();
    app = module.createNestApplication();
    await app.init();
    userService = app.get<UserService>(UserService);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should create new user', async () => {
    await userService.createUser(USER_DATA);
    expect((await userService.getUsers()).length).toBe(1);
  });

  it('should filter users by args', async () => {
    await userService.createUser(USER_DATA);
    const users = await userService.getUsers({ birthday: '1988-12-09' });
    expect(users.length).toBe(1);

    const birthdayUsers = await userService.getUsers({
      birthday: '1988-12-10',
    });
    expect(birthdayUsers.length).toBe(0);

    const profiUsers = await userService.getUsers({
      membership: MembershipType.profi,
    });
    expect(profiUsers.length).toBe(1);

    const emailUsers = await userService.getUsers({
      email: 'info@test.cz',
    });
    expect(emailUsers.length).toBe(0);
  });

  afterEach(async () => {
    await userService.truncate();
  });
});
