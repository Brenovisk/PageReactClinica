import React from 'react';
import './App.css';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from './components/Resumo/Resumo';
import Consultas from './components/Consultas/Consultas';


function App() {
  return (
    <div className="App">
    
     <MenuSuperior></MenuSuperior>
     <Resumo></Resumo>
     <Consultas></Consultas>
      
      
    </div>
  );
}

export default App;
