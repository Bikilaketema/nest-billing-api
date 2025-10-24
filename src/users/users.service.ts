import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * Creates a new user.
   * The password will be hashed automatically by the @BeforeInsert hook in user.entity.ts
   * @param userData - Data for the new user
   * @returns The newly created user
   */
  async create(userData: Partial<User>): Promise<User> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  /**
   * Finds a user by their email address.
   * This method is crucial for the login process.
   * We must explicitly ask for the password, since it's hidden by default.
   * @param email - The user's email
   * @returns The user, including their password
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email })
      .addSelect('user.password') // Explicitly select the password
      .getOne();
  }

  /**
   * Finds a user by their ID.
   * @param id - The user's ID
   * @returns The user
   */
  async findById(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }
}
