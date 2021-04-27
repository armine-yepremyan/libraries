import { Test, TestingModule } from '@nestjs/testing';
import { BooksResolver } from './books.resolver';
import { LibrariesService } from './../libraries/libraries.service'

describe('BooksResolver', () => {
  let resolver: BooksResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksResolver, LibrariesService],
    }).compile();

    resolver = module.get<BooksResolver>(BooksResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
