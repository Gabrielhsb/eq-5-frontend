import React from 'react';
import ReactDOM from 'react-dom';
import About from "./views/about-us";
import Home from "./views/home";
import Login from "./views/login";
import Perfil from "./views/perfil";
import MyPerfil from "./views/myPerfil";
import Search from "./views/search";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/header';
import StoreProvider from './components/store/provider';
import RoutesPrivate from './components/routes/private/private';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  <StoreProvider>
    <Header/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/search" component={Search}/>
        <Route path="/login" component={Login}/>
        <Route path="/perfil" component={Perfil}/>
        <RoutesPrivate path="/meu-perfil" component={MyPerfil}/>
        <Route path="/about" component={About}/>
      </Switch>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

