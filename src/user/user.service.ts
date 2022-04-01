import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly UserRepository: Repository<UserEntity>,
  ) {}

  async createUser(data: UserDto): Promise<UserEntity> {
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
}
