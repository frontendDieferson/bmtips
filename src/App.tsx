import { useRef, useState } from 'react'
import logobmtips from './assets/logobmtips.png'
import './App.css'
import emailjs, { send } from '@emailjs/browser'


function App() {

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_9uac0t7', 'template_ol4dl19', form.current, 'HTOxlWNcQT4jsBbc6')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  }

  return (
    <div className="App">
      <div>
        <a href="/" >
          <img src={logobmtips} className="logo react" alt="BmTips logo" />
        </a>
      </div>
      <h2>Entre para lista e saiba quando os grupos estarão disponíveis</h2>
      <form ref={form} onSubmit={sendEmail} className='formApp'>
        <input 
         
          placeholder="Insira seu melhor email"
          type="email" name="user_email"
          
        />
        <button type="submit">Cadastrar</button>
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
