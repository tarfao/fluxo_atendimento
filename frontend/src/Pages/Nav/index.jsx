import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const MyNav = styled.nav`
    display: flex;
    justify-content: space-around;
`;

MyNav.Item = styled(Link)`
    padding: 30px;
    border-radius: 20px;
    &:hover {
        background-color: #c1c1c1
    }
`

function Navegacao(){
return (
    <MyNav>
        <MyNav.Item to='/'>Lista</MyNav.Item>
        <MyNav.Item to='/cadastro'>Cadastrar</MyNav.Item>
        <MyNav.Item to='/busca'>Buscar</MyNav.Item>
    </MyNav>
)
}

export default withRouter(Navegacao);