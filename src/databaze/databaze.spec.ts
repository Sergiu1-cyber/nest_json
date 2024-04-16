import { Test, TestingModule } from '@nestjs/testing';
import { Databaze } from './databaze';

describe('Databaze', () => {
  let provider: Databaze;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Databaze],
    }).compile();

    provider = module.get<Databaze>(Databaze);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
