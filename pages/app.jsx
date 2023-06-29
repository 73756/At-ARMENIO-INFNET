import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Produtos from './Produtos';
import Clientes from './Clientes';
import Fornecedores from './Fornecedores';
import Cotacoes from './Cotacoes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Produtos} />
        <Route path="/clientes" component={Clientes} />
        <Route path="/fornecedores" component={Fornecedores} />
        <Route path="/cotacoes" component={Cotacoes} />
      </Switch>
    </Router>
  );
}

export default App;
