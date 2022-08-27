import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logobmtips from './assets/logobmtips.png'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <a href="/" >
          <img src={logobmtips} className="logo react" alt="BmTips logo" />
        </a>
      </div>
      <h2>Entre para lista e saiba quando os grupos estarão disponíveis</h2>
      <form className='formApp'>
        <input 
          type="text"
          placeholder="Insira seu melhor email"
        />
        <button>Cadastrar</button>
      </form>
      <div className="card">
        
         </div>
      <p className="read-the-docs">
        Desenvolvido por SigmaDev
      </p>
    </div>
  )
}

export default App
