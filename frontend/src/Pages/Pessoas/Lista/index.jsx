import { Table } from "react-bootstrap";

function Lista(){
    const Pessoas = [
        { id: 1, login: "Ronaldo", tipo: "CLIENTE" },
        { id: 2, login: "tafarel", tipo: "ATENDENTE" },
        { id: 3, login: "pereira", tipo: "CLIENTE" },
        { id: 4, login: "souza", tipo: "ATENDENTE" },
    ]
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
                {Pessoas.map((p, index) => (
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