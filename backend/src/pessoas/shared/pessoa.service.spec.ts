import { Test, TestingModule } from '@nestjs/testing';
import { PessoaService } from './pessoa.service';

describe('PessoaService', () => {
  let provider: PessoaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PessoaService],
    }).compile();

    provider = module.get<PessoaService>(PessoaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
