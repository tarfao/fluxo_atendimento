import { Form, Table, Button } from "react-bootstrap";
import { useState } from "react";

function Busca(){
    const Pessoas = [
        { id: 1, login: "Ronaldo", tipo: "CLIENTE" },
        { id: 2, login: "tafarel", tipo: "ATENDENTE" },
        { id: 3, login: "pereira", tipo: "CLIENTE" },
        { id: 4, login: "souza", tipo: "ATENDENTE" },
    ]
    const [inputBusca, setInputBusca] = useState("")
    const [pessoaEncontrada, setPessoaEncontrada] = useState({});

    const handleChange = e => {
        const { value } = e.target;
        setInputBusca(value);
    }
    
    const buscaPessoa = e => {
        const p = Pessoas.find(o => o.login === inputBusca);
        if(p){
            setPessoaEncontrada(p);
            return;
        }
        setPessoaEncontrada({});
    }

    return (
        <div>
            <Form.Group>
                <Form.Label>Buscar</Form.Label>
                <Form.Control value={inputBusca} onChange={handleChange} type='text' placeholder='informe o login para busca' />
            </Form.Group>
            {pessoaEncontrada.id ? 
            (
                <Table>
                    <tr>
                        <th>ID</th>
                        <th>Login</th>
                        <th>Tipo</th>
                        <th>Comissão</th>
                    </tr>
                    <tr>
                        <td>{pessoaEncontrada.id}</td>
                        <td>{pessoaEncontrada.login}</td>
                        <td>{pessoaEncontrada.tipo}</td>
                        <td>{pessoaEncontrada.comissao}</td>
                    </tr>
                </Table>
            ) : 
            false}
            <Button variant='warning' onClick={buscaPessoa}>Buscar</Button>
        </div>
    )
}

export default Busca;