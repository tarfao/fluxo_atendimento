import { Form, Table, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import consts from "../../../config/consts";

function Busca(){
    const [inputBusca, setInputBusca] = useState("")
    const [pessoaEncontrada, setPessoaEncontrada] = useState({});

    const handleChange = e => {
        const { value } = e.target;
        setInputBusca(value);
    }
    
    const buscaPessoa = async () => {
        const { data } = await axios.get(`${consts.api}/pessoas/${inputBusca}`)
        if(data){
            setPessoaEncontrada(data);
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