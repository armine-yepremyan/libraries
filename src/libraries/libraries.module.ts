import { Module } from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { LibrariesResolver } from './libraries.resolver';

@Module({
  providers: [LibrariesService, LibrariesResolver]
})
export class LibrariesModule {}
