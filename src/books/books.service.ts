import { Injectable } from '@nestjs/common';
import { BOOKS } from './../mocks/books.mock';
import { GetBooksArgs, GetBookArgs, GetBooksCountArgs, UpdateBookInput } from './dto/books.input';
import { Book } from './models/book';

@Injectable()
export class BooksService {
    private books = BOOKS;

    public getBook(getBookArgs: GetBookArgs): Book {
        return this.books.find(book => book.id === getBookArgs.id)
    }
    
    /** returns all books in DB */
    public getAllBooks(): Book[] {
        return this.books;
    }

    /** returns filtered array using 'search' argument for book's title */
    public getBooks(getBooksArgs: GetBooksArgs): Book[] {
        return this.books.filter(book => book.title.includes(getBooksArgs.search));
    }

    /** returns total number of how many books added - starting from specific startingDate */
    public getBooksCountCreatedAfterDate(getBooksCountArgs: GetBooksCountArgs): number {
        // converting input date (type is string) to Date object
        const [ searchDay, searchMonth, searchYear ] = getBooksCountArgs.startingDate.split('/');
        let searchDate = new Date(parseInt(searchYear), parseInt(searchMonth) - 1, parseInt(searchDay));
        
        const countBooks = this.books.reduce((counter, book) => {
            const [ bookDay, bookMonth, bookYear ] = book.createdDate.split('/');
            let bookDate = new Date(parseInt(bookYear), parseInt(bookMonth) - 1, parseInt(bookDay));
            
            if (bookDate >= searchDate) {
                counter += 1;
            }
            return counter;
        }, 0); 
        
        return countBooks;
    }

    /** Updates the specific book's title. Input has id (to find the specific book by id) and title */
    public updateBook(input: UpdateBookInput) {
        let bookToUpdate = this.books.find(book => {
            if(book.id === input.id) {
                book.title = input.title;
                return book;
            }
        });
        if(!bookToUpdate) {
            throw new Error(`There is no book with ${input.id} id`);
        }
        return bookToUpdate;
    }
}
