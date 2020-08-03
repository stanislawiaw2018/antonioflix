import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/Cadastro/video';
import CadastroCategoria from './pages/Cadastro/Categoria';



const Pagina404 = () => (<h1>Página 404</h1>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component= {Home} exact />
      <Route path="/cadastro/video" component= {CadastroVideo} />
      <Route path="/cadastro/categoria" component= {CadastroCategoria} />
      <Route component= {Pagina404}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

