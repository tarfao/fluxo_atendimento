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

function Routes() {
    return (
        <BrowserRouter>
        <Navegacao/>
            <Switch>
                <Route path='/' exact>
                    <Lista />
                </Route>
                <Route path='/cadastro'>
                    <Cadastro />
                </Route>
                <Route path='/busca'>
                    <Busca />
                </Route>
                <Redirect to='/' from='*' />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;