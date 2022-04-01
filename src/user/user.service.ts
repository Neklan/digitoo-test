import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { MembershipService } from 'src/membership/membership.service';
import { InputUser } from './inputs/user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
    private readonly membershipService: MembershipService,
  ) {}

  async createUser(data: InputUser): Promise<UserEntity> {
    const membership = await this.membershipService.findMembershipByType(
      data.type.toString(),
    );
    const user = new UserEntity();
    user.first_name = data.first_name;
    user.last_name = data.last_name;
    user.birthday = data.birthday;
    user.email = data.email;
    await this.UserRepository.save(user);
    return user;
  }

  async getUsers() {
    return await this.UserRepository.find();
  }

  async truncate() {
    this.UserRepository.delete({});
  }
}
