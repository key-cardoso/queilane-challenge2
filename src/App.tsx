import React from 'react';
import Form from '../src/pages/cadastro/Form';
import { FormData } from '../src/pages/cadastro/FormData';
import imagem from './img/image1.png'

const App: React.FC = () => {
  const handleSubmit = (data: FormData) => {
    console.log('Form data:', data);
  };

  return (
    <div className='App'>
      <div className='form-container'>
        <Form  onSubmit={handleSubmit} />
      </div>
      <div className='imagem-container'>
        <img className='img' src={imagem} alt="Imagem" />
      </div>
      
    </div>

  );
};

export default App;
