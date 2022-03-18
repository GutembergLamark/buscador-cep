import React, {useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import './App.css';

import api from './services/Api';
import enter from './services/enter';

function App() {

  const [input, setInput] = useState("")
  const [cep, setCep] = useState({});

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha algum CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput('');
    }catch{
      alert("Ops erro ao buscar");
      setInput('');
    }
  }
  return (
    <div className="App">
      <header className="topo">
            <div className="topo-conteudo">
              BUSCA CEP
            </div>
        </header>
      <h1 className='title'>Buscador CEP</h1>
      <div className='container-input'>
        <input
        type="text"
        placeholder='Digite seu cep...'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch} id="submit">
          <FiSearch size={25} color="#fff"/>
        </button>

      </div>

      {Object.keys(cep).length > 0 && (
        <main className='main'>

          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}
    
    <footer className="rodape">
      <div className="container">
        © Copyright 2021   |   Gutemberg Lamark
      </div>
    </footer>
    </div> 
  );
}

export default App;
