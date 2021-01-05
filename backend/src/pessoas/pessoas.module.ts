import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './shared/pessoa.service';

@Module({
  controllers: [PessoasController],
  providers: [PessoaService]
})
export class PessoasModule {}
