import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { LibrariesService } from './libraries.service';
import { Library } from './models/library';
import { GetLibraryArgs } from './dto/libraries.input';


@Resolver()
export class LibrariesResolver {

    constructor(private readonly librariesService: LibrariesService) {}

    @Query(() => Library)
    library(@Args('id', { type: () => Int }) getLibraryArgs: GetLibraryArgs): Library {
        return this.librariesService.getLibrary(getLibraryArgs);
    }


    @Query(() => [Library])
    libraries(): Library[] {
        return this.librariesService.getLibraries();
    }
}
