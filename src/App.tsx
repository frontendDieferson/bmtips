import logobmtips from "./assets/logobmtips.png";

export default function App() {
  return (
    <div className="w-screen text-3xl font-bold bg-gray-dark">
      <div className="container mx-auto flex flex-row justify-between">
        <img
          src={logobmtips}
          className="w-20 h-20 p-4 flex flex-row justify-center items-center sm:items-center"
        />
        <div className="container flex justify-end mr-8">
          <ul className="flex flex-col lg:flex-row list-none ml-auto mt-6">
            <li nav-item>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href=""
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href=""
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href=""
              >
                Produto
              </a>
            </li>
          </ul>
        </div>
        <button className="bg-green rounded text-white text-base m-2 p-4 w-40">
          Nosso Grupo
        </button>
      </div>
      <main className="container py-16 ml-96">
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

      <div className="container mx-auto  p-4 flex flex-row justify-center">
        <h1 className="text-white font-bold text-4xl">Conheça nossos Planos</h1>
      </div>
      <div className="container mx-auto flex flex-row justify-evenly">

      <div className=" w-80 h-96 rounded-lg bg-purple-dark flex flex-col">
        <h1 className="text-green">Free</h1>
        <h2>$0</h2>
        <strong>O que é incluso?</strong>
        <button>Entrar no grupo Free</button>
      </div>

      <div className=" w-80 h-96 rounded-lg bg-purple flex flex-col">
        <h1 className="text-green">Vip</h1>
        <h2>$10</h2>
        <strong>O que é incluso?</strong>
        <button>Entrar para o grupo Vip</button>
      </div>
      </div>

    </div>
  );
}
