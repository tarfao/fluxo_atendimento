import { useState } from "react";

function UseCadastro() {
    const dados_iniciais = {
        login: '',
        senha: '',
        tipo: '',
        comissao: 0
    }

    const [values, setValues] = useState(dados_iniciais);
    const [errors, setErrors] = useState({ ...dados_iniciais, comissao: ''});

    const handleChange = e => {
        const name = e.target.getAttribute("name");
        const { value } = e.target;

        setValues({...values, [name]: value });
    }

    const valida_dados = () => {
        return new Promise((resolve, reject) => {
            try {
                const nomes = ['login', 'senha', 'tipo', 'comissao'];
                const msg_erro = "Esse campo não pode ser vazio"
                const errors_aux = {...dados_iniciais, comissao: ''};
                let form_valido = true;

                nomes.forEach(nome => {
                    if(!values[nome]){
                        if(nome !== 'comissao' || (nome === 'comissao' && values.tipo === 'ATENDENTE')){
                            errors_aux[nome] = msg_erro;
                            form_valido = false;
                        }
                    }
                })
                setErrors(errors_aux);
                resolve(form_valido);
            } catch (error) {
                reject(error)      
            }
        })
    }

    const store = async e => {
        e.preventDefault();
        const dados_validos = await valida_dados();
        if(dados_validos){
            console.log("submetido");
        }else{
            console.log("Erro na submissão");
        }
    }

    return {
        values, errors, handleChange, store
    }
}

export default UseCadastro;