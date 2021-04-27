import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Library {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;
}