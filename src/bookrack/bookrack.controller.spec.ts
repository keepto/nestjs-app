import { Test, TestingModule } from '@nestjs/testing';
import { BookrackController } from './bookrack.controller';

describe('Bookrack Controller', () => {
  let controller: BookrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookrackController],
    }).compile();

    controller = module.get<BookrackController>(BookrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
