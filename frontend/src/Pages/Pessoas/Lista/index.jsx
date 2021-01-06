import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import consts from "../../../config/consts";

function Lista(){
    const Pessoas = [
        { id: 1, login: "Ronaldo", tipo: "CLIENTE" },
        { id: 2, login: "tafarel", tipo: "ATENDENTE" },
        { id: 3, login: "pereira", tipo: "CLIENTE" },
        { id: 4, login: "souza", tipo: "ATENDENTE" },
    ]
    const [pessoas, setPessoas] = useState([])

    const indexPessoas = async () => {
        try {
            const { data } = await axios.get(`${consts.api}/pessoas`);
            setPessoas(data);
        } catch (error) {
            throw new Error(error);
        }
    }

    useEffect(() => {
        indexPessoas();
    })
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Login</th>
                <th>Tipo</th>
                </tr>
            </thead>
            <tbody>
                {pessoas.map((p, index) => (
                    <tr key={index}>
                        <td>{p.id}</td>
                        <td>{p.login}</td>
                        <td>{p.tipo}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Lista;