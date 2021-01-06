import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PessoaService } from './shared/pessoa.service';
import { Pessoa } from './pessoa.entity';

@Controller('/api/pessoas')
export class PessoasController {
    constructor(private pessoaSerivce: PessoaService){}

    @Get()
    async getAll(): Promise<Pessoa[]>{
        return this.pessoaSerivce.getAll()
    }

    @Post()
    async store(@Body() bodyPessoa): Promise<Pessoa>{
        return this.pessoaSerivce.create(bodyPessoa)
    }

    @Get("/:username")
    async getOneLogin(@Param("username") username): Promise<Pessoa | { msg: string; }>{
        return this.pessoaSerivce.findByUsername(username)
    }
}
