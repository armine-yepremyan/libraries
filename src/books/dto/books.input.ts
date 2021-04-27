import { ArgsType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetBooksArgs {
    @Field({ nullable: true })
    search: string;
}

@ArgsType()
export class GetBookArgs {
    @Field()
    @IsNotEmpty()
    id: number;
}


@ArgsType()
export class GetBooksCountArgs {
    @Field()
    @IsNotEmpty()
    startingDate: string;
}

@InputType()
export class UpdateBookInput {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  title: string;
}



