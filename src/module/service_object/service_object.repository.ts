import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, ServiceObject } from '@prisma/client';
import { FindUniqueServiceObjectArgs } from 'src/@generated/service-object/find-unique-service-object.args';
import { FindManyServiceObjectArgs } from 'src/@generated/service-object/find-many-service-object.args';
import { CreateOneServiceObjectArgs } from 'src/@generated/service-object/create-one-service-object.args';

@Injectable()
export class ServiceObjectRepository {
  constructor(private prisma: PrismaService) {}

  async getServiceObject(
    args: FindUniqueServiceObjectArgs,
  ): Promise<ServiceObject | null> {
    return await this.prisma.serviceObject.findUnique({
      ...args,
    });
  }

  async getServiceObjects(
    args: FindManyServiceObjectArgs,
  ): Promise<ServiceObject[]> {
    return this.prisma.serviceObject.findMany({
      ...args,
    });
  }
  async createServiceObject(
    args: CreateOneServiceObjectArgs,
  ): Promise<ServiceObject> {
    return this.prisma.serviceObject.create({
      ...args,
      data: args.data as Prisma.ServiceObjectCreateInput,
    });
  }

  async upsertServiceObject(args: any): Promise<ServiceObject> {
    delete args.sort_id;
    const updateData = {
      ...args,
      ts_updated: new Date(),
    };
    if (args.status_id === 1 && !args.ts_completed) {
      updateData.ts_completed = new Date();
    }
    delete updateData.ts_inserted;

    return this.prisma.serviceObject.upsert({
      where: {
        sp_id_so_id: {
          sp_id: args.sp_id,
          so_id: args.so_id,
        },
      },
      update: updateData,
      create: {
        ...args,
        ts_updated: new Date(),
        ts_inserted: new Date(),
      },
    });
  }
}
