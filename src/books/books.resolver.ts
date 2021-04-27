import { Resolver, Query, Args, ResolveField, Parent, Int, Mutation } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './models/book';
import { GetBooksArgs, GetBookArgs, GetBooksCountArgs, UpdateBookInput } from './dto/books.input';
import { LibrariesService } from './../libraries/libraries.service';
import { Library } from './../libraries/models/library';

@Resolver(() => Book)
export class BooksResolver {

    constructor(
        private readonly booksService: BooksService,
        private readonly librariesService: LibrariesService
    ) {}

    @Query(() => Book)
    book(@Args() getBookArgs: GetBookArgs): Book {
        return this.booksService.getBook(getBookArgs);
    }

    @Query(() => [Book])
    books(@Args() getBooksArgs: GetBooksArgs): Book[] {
        if(!Object.keys(getBooksArgs).length) {
            return this.booksService.getAllBooks();
        }
        return this.booksService.getBooks(getBooksArgs);
    }

    @Query(() => Int)
    count(@Args() getBooksCountArgs: GetBooksCountArgs): number {
        return this.booksService.getBooksCountCreatedAfterDate(getBooksCountArgs);
    }

    
    @ResolveField(() => String)
    created(@Parent() book: Book) {
        return book.createdDate;
    }

    @ResolveField(() => Library)
    library(@Parent() book: Book) {
        const { libraryId } = book;
        return this.librariesService.getLibrary({ id: libraryId });
    }

    @Mutation(() => Book)
    update(@Args('input') input: UpdateBookInput): Book {
        let result = this.booksService.updateBook(input);
        return result;
    }
}
