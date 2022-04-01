import { Injectable } from '@nestjs/common';
import { MembershipService } from './membership/membership.service';
import { UserService } from './user/user.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UserService,
    private readonly membershipService: MembershipService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  purgeDb() {
    return Promise.all([
      this.userService.truncate(),
      this.membershipService.truncate(),
    ]);
  }
}
