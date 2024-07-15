import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { ServiceObjectRepository } from './service_object.repository';
import { ServiceObjectService } from './service_object.service';
import { ServiceObjectResolver } from './service_object.resolver';

@Module({
  imports: [PrismaModule],
  providers: [
    ServiceObjectRepository,
    ServiceObjectResolver,
    ServiceObjectService,
  ],
})
export class ServiceObjectModule {}
