import Header from "./components/Header";

export default function App() {
  return (
    <>
    <Header />
    <div className="w-screen text-3xl font-bold bg-gray-dark">
      <main className="container py-12 ml-96">
        <h1 className=" container w-7/12 leading-normal text-white text-5xl">
          A melhor banca de Apostas de Rondônia e região.
        </h1>
        <span className="text-2xl	 text-white font-light">
          Fique por dentro das nossas dicas
        </span>
        <div className="mt-4 mb-3 pt-0">
          <input
            type="text"
            placeholder="Seu melhor email"
            className=" w-96 px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-inherit rounded text-sm border-0 shadow outline-none"
            />
          <button className="bg-green rounded text-white text-base px-3 py-3 w-32 ml-4">
            Enviar
          </button>
        </div>
      </main>

      <div className="container mx-auto flex flex-row justify-center">
        <h1 className="mb-8 text-white font-bold text-4xl border-b-2 border-white">Conheça nossos Planos</h1>
      </div>
      <div className="container mx-auto flex flex-row justify-evenly">

      <div className=" w-80 h-96 rounded-lg bg-purple-dark flex flex-col justify-around">
        <h1 className="text-green flex justify-start m-4 border-b-2 border-white w-6">Free</h1>
       
        <strong className="text-white m-4">O que é incluso?</strong>
        <p className="text-white text-sm m-4">- 2 greens por dia - Futebol Virtual</p>
        <button className="bg-purple rounded p-4 text-base text-white m-4 py-4">Entrar no grupo Free</button>
      </div>

      <div className=" w-80 h-96 rounded-lg bg-purple flex flex-col justify-around">
        <h1 className="text-purple-dark flex justify-start m-4  border-b-2 border-white w-6">Vip</h1>
        <strong className="text-white m-4">O que é incluso?</strong>
        <p className="text-white text-sm m-4">- greens ilimitados - Futebol Virtual</p>
        <h2 className="mx-auto text-base text-white">Tudo isso por <h1 className="text-xl border-b-2 border-white w-12">R$50.00/mês</h1></h2>
        <button className="bg-white rounded p-4 text-base text-green m-4 py-4">Assinar</button>
      </div>
      </div>
      <div className="container flex flex-row justify-center mx-auto">
      <span className=" text-white text-sm">
      desenvolvido por SigmaDev
    </span>
      </div>
    </div>
            </>
  );
}
