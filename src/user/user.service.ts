import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'prisma/prisma.schema';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDTO.password, 10);
    const newUser = await this.prisma.user.create({
      data: {
        ...createUserDTO,
        password: hashedPassword,
      },
    });
    
    return newUser;
  }

  async findUser(username: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { username: username },
    });

    return user;
  }
}

