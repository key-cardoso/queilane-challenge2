import React from 'react';
import Form from '../src/pages/cadastro/Form';
import Login from '../src/pages/login/login';
import Dashboard from './pages/dash/dash';
import { FormData } from '../src/pages/cadastro/FormData';
import imagem from './img/image1.png';
import logo from './img/logo.png';
import { Switch, BrowserRouter, Route } from "react-router-dom";

const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            <div className='App'>
              <div className='form-container'>
                <Form onSubmit={handleSubmit} />
              </div>
              <div className='imagem-container'>
                <img className='img' src={imagem} alt="Imagem" />
                <a href="https://compass.uol/en/home/" target="_blank" rel="noopener noreferrer"><img className='logo' src={logo} alt="logo" /></a>
              </div>
            </div>
          )} />

          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
