import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // 1.1 Import the mongoose module
import { ProductModule } from './product/product.module'; // 2.1 Import the product module
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { PrismaModule } from '../prisma/prisma.module';


@Module({
  imports: [ PrismaModule,ProductModule, UserModule, AuthModule, CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
