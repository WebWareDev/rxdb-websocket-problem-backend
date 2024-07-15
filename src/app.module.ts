import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PrismaModule } from 'prisma/prisma.module';
import { ServicePlanModule } from './module/service_plan/service_plan.module';
import { ServiceObjectModule } from './module/service_object/service_object.module';
@Module({
  imports: [
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      useFactory: async () => {
        return {
          playground: true,
          autoSchemaFile: true,
          sortSchema: true,
          subscriptions: {
            'subscriptions-transport-ws': {
              onConnect: (req) => {
                const headers = req.connectionParams.headers;
                return { headers };
              },
              // NOTE we need context to be able to access the headers
              context: (context) => {
                return context;
              },
            },
            'graphql-ws': {
              onConnect: (req) => {
                const headers = req.connectionParams.headers;
                return { headers };
              },
              // NOTE we need context to be able to access the headers
              context: (context) => {
                return context;
              },
            },
          },
        };
      },
    }),
    PrismaModule,
    ServicePlanModule,
    ServiceObjectModule,
  ],
  providers: [
  ],
})
export class AppModule{}
