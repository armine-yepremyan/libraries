import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Book {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    createdDate: string;

    @Field(() => Int)
    libraryId: number;
}