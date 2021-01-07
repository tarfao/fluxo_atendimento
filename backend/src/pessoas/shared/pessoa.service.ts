import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from '../pessoa.entity';
import { Repository } from 'typeorm';

interface BodyLogin {
    login: string,
    senha: string
}

@Injectable()
export class PessoaService {
    constructor(
        @InjectRepository(Pessoa)
        private pessoaRepository: Repository<Pessoa> 
    ){}

    getAll(){
        return this.pessoaRepository.find();
    }

    async findByUsername(username: string){
        const pessoa = await this.pessoaRepository.findOne({ where: { login: username }});
        if(pessoa){
            return pessoa;
        }
        return { msg: "Pessoa não encontrada!"}
    }

    create(pessoa: Pessoa){
        return this.pessoaRepository.save(pessoa);
    }
}
