import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceObjectWhereInput } from './service-object-where.input';
import { Type } from 'class-transformer';
import { ServiceObjectOrderByWithAggregationInput } from './service-object-order-by-with-aggregation.input';
import { ServiceObjectScalarFieldEnum } from './service-object-scalar-field.enum';
import { ServiceObjectScalarWhereWithAggregatesInput } from './service-object-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ServiceObjectCountAggregateInput } from './service-object-count-aggregate.input';
import { ServiceObjectAvgAggregateInput } from './service-object-avg-aggregate.input';
import { ServiceObjectSumAggregateInput } from './service-object-sum-aggregate.input';
import { ServiceObjectMinAggregateInput } from './service-object-min-aggregate.input';
import { ServiceObjectMaxAggregateInput } from './service-object-max-aggregate.input';

@ArgsType()
export class ServiceObjectGroupByArgs {

    @Field(() => ServiceObjectWhereInput, {nullable:true})
    @Type(() => ServiceObjectWhereInput)
    where?: ServiceObjectWhereInput;

    @Field(() => [ServiceObjectOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ServiceObjectOrderByWithAggregationInput>;

    @Field(() => [ServiceObjectScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ServiceObjectScalarFieldEnum>;

    @Field(() => ServiceObjectScalarWhereWithAggregatesInput, {nullable:true})
    having?: ServiceObjectScalarWhereWithAggregatesInput;

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
