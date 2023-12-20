import { Global, Module } from '@nestjs/common';
import {PrismaService} from './prisma.service';


@Global()
@Module({
    exports:[PrismaService],
    providers: [],
  })
  export class PrismaModule {}