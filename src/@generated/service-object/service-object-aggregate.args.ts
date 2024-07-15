import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectWhereInput } from './service-object-where.input';
import { Type } from 'class-transformer';
import { ServiceObjectOrderByWithRelationInput } from './service-object-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ServiceObjectWhereUniqueInput } from './service-object-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceObjectCountAggregateInput } from './service-object-count-aggregate.input';
import { ServiceObjectAvgAggregateInput } from './service-object-avg-aggregate.input';
import { ServiceObjectSumAggregateInput } from './service-object-sum-aggregate.input';
import { ServiceObjectMinAggregateInput } from './service-object-min-aggregate.input';
import { ServiceObjectMaxAggregateInput } from './service-object-max-aggregate.input';

@ArgsType()
export class ServiceObjectAggregateArgs {

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    @Type(() => ServiceObjectWhereInput)
    where?: ServiceObjectWhereInput;

    @Field(() => [ServiceObjectOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceObjectOrderByWithRelationInput>;

    @Field(() => ServiceObjectWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ServiceObjectWhereUniqueInput, 'sp_id_so_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ServiceObjectCountAggregateInput, {nullable:true})
    _count?: ServiceObjectCountAggregateInput;

    @Field(() => ServiceObjectAvgAggregateInput, {nullable:true})
    _avg?: ServiceObjectAvgAggregateInput;

    @Field(() => ServiceObjectSumAggregateInput, {nullable:true})
    _sum?: ServiceObjectSumAggregateInput;

    @Field(() => ServiceObjectMinAggregateInput, {nullable:true})
    _min?: ServiceObjectMinAggregateInput;

    @Field(() => ServiceObjectMaxAggregateInput, {nullable:true})
    _max?: ServiceObjectMaxAggregateInput;
}
