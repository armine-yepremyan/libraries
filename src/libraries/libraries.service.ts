import { Injectable } from '@nestjs/common';
import { LIBRARIES } from './../mocks/libraries.mock';
import { GetLibraryArgs } from './dto/libraries.input';
import { Library } from './models/library';

@Injectable()
export class LibrariesService {
    private libraries = LIBRARIES;

    /** returns library */
    public getLibrary(getLibraryArgs: GetLibraryArgs): Library {
        let result = this.libraries.find(library => library.id === getLibraryArgs.id)
        if(!result) {
            throw new Error(`Something went wrong, please check books libraryIds. There is no library with ${getLibraryArgs.id} id`);
        }
        return result;
    }
    
    /** additiona function: returns array of all libraries */
    public getLibraries(): Library[] {
        return this.libraries;
        // let result = this.libraries.filter(library => library.title.includes(getLibrariesArgs.search))
        // return result;
    }
}
