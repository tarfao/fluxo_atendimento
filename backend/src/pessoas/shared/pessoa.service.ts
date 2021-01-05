import { Injectable } from '@nestjs/common';
import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {
    pessoas: Pessoa[] = [
        { login: "JoaoCliente", senha: "123", tipo: "CLIENTE", comissao: null },
        { login: "PedroCliente", senha: "123", tipo: "CLIENTE", comissao: null },
        { login: "AtendenteMario", senha: "123", tipo: "ATENDENTE", comissao: 2.5 },
        { login: "AtendenteRodrigo", senha: "123", tipo: "ATENDENTE", comissao: 3 },
    ]

    getAll(){
        return this.pessoas;
    }

    getByLogin(login: string){
        const p = this.pessoas.find(p => p.login == login)
        return p;
    }

    create(pessoa: Pessoa){
        this.pessoas.push(pessoa);
        return pessoa;
    }
}
