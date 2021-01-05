import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PessoaService } from './shared/pessoa.service';
import { Pessoa } from './shared/pessoa';

@Controller('/api/pessoas')
export class PessoasController {
    constructor(private pessoa: PessoaService){}

    @Get()
    async getAll(): Promise<Pessoa[]>{
        return this.pessoa.getAll()
    }

    @Post()
    async store(@Body() bodyPessoa): Promise<Pessoa>{
        return this.pessoa.create(bodyPessoa)
    }

    @Post("/login")
    async getOneLogin(@Body("login") login){
        return this.pessoa.getByLogin(login)
    }
}
