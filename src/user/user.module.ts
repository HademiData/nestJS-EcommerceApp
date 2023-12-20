import { Module } from '@nestjs/common';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}