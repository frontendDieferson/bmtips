import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import logobmtips from './assets/logobmtips.png'
function App() {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9uac0t7",
        "template_ol4dl19",
       
        "HTOxlWNcQT4jsBbc6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="App">
      <div>
        <a href="/">
          <img src={logobmtips} className="logo react" alt="BmTips logo" />
        </a>
      </div>
      <h2>Entre para lista e saiba quando os grupos estarão disponíveis</h2>
      <form>
        <input
          placeholder="Insira seu melhor email"
          type="email"
          name="user_email"
        />
        <button type="submit">Cadastrar</button>
      </form>
      <div className="card"></div>
      <p className="read-the-docs">Desenvolvido por SigmaDev</p>
    </div>
  );
}
