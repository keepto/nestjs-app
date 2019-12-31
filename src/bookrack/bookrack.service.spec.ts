import { Test, TestingModule } from '@nestjs/testing';
import { BookrackService } from './bookrack.service';

describe('BookrackService', () => {
  let service: BookrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookrackService],
    }).compile();

    service = module.get<BookrackService>(BookrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
