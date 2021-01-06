import { Button } from "react-bootstrap";
import Cadastro from "./Cadastro";
import { WrapperContainer, WrapperContent } from "./styles";
import Lista from "./Lista";
import Busca from "./Busca";

export default () => (
    <WrapperContent>
        <WrapperContainer>
            <Cadastro />
        </WrapperContainer>
        <WrapperContainer>
            <Lista />
        </WrapperContainer>
        <WrapperContainer>
            <Busca />
        </WrapperContainer>
    </WrapperContent>
)