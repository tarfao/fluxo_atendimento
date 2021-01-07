import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Lista from "./Pessoas/Lista";
import Cadastro from "./Pessoas/Cadastro";
import Busca from "./Pessoas/Busca";
import Navegacao from "./Nav";
import { WrapperContent } from "./styles";

function Routes() {
    return (
        <BrowserRouter>
            <Navegacao>
                <Switch>
                    <Route path='/' exact>
                        <WrapperContent>
                            <Lista />
                        </WrapperContent>
                    </Route>
                    <Route path='/cadastro'>
                        <WrapperContent>
                            <Cadastro />
                        </WrapperContent>
                    </Route>
                    <Route path='/busca'>
                        <WrapperContent>
                            <Busca />
                        </WrapperContent>
                    </Route>
                    <Redirect to='/' from='*' />
                </Switch>
            </Navegacao>
        </BrowserRouter>
    )
}

export default Routes;