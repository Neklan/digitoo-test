import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { MembershipService } from 'src/membership/membership.service';
import { InputUser } from './inputs/user.input';
import { GetUsersARgs } from './args/users.args';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
    private readonly membershipService: MembershipService,
  ) {}

  async createUser(data: InputUser): Promise<UserEntity> {
    const membership = await this.membershipService.createMembership({
      typeName: data.type,
    });
    const user = new UserEntity();
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.birthday = data.birthday;
    user.email = data.email;
    user.membership = membership;
    await this.UserRepository.save(user);
    return user;
  }

  async getUsers(filter?: GetUsersARgs) {
    const where: any = {};
    if (filter && filter.email) {
      where.email = filter.email;
    }
    if (filter && filter.birthday) {
      where.birthday = filter.birthday;
    }
    if (filter && filter.membership !== undefined) {
      where.membership = {
        typeName: filter.membership,
      };
    }
    return await this.UserRepository.find({
      where,
      relations: ['membership'],
    });
  }

  async truncate() {
    this.UserRepository.delete({});
  }
}
