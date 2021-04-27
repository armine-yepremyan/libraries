import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BooksModule } from './books/books.module';
import { LibrariesModule } from './libraries/libraries.module';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    BooksModule,
    LibrariesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
