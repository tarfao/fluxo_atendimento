import { Module } from '@nestjs/common';
import { PessoasController } from './pessoas.controller';
import { PessoaService } from './shared/pessoa.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pessoa } from './pessoa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pessoa])],
  controllers: [PessoasController],
  providers: [PessoaService]
})
export class PessoasModule {}
