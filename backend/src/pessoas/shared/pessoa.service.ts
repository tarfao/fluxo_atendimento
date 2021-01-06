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
    // pessoas: Pessoa[] = [
    //     { login: "JoaoCliente", senha: "123", tipo: "CLIENTE", comissao: null },
    //     { login: "PedroCliente", senha: "123", tipo: "CLIENTE", comissao: null },
    //     { login: "AtendenteMario", senha: "123", tipo: "ATENDENTE", comissao: 2.5 },
    //     { login: "AtendenteRodrigo", senha: "123", tipo: "ATENDENTE", comissao: 3 },
    // ]

    getAll(){
        return this.pessoaRepository.find();
    }

    async login(bodyLogin: BodyLogin){
        const pessoa = await this.pessoaRepository.findOne({ 
            where: { 
                login: bodyLogin.login, 
                senha: bodyLogin.senha
            }})
        if(!pessoa){
            return { msg: "Login/Senha inválidos" }
        } else {
            return pessoa;
        }
    }

    create(pessoa: Pessoa){
        return this.pessoaRepository.save(pessoa);
    }
}
