import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty, isNotEmpty } from 'class-validator';


@ArgsType()
export class GetLibraryArgs {
    @Field()
    @IsNotEmpty()
    id: number;
}