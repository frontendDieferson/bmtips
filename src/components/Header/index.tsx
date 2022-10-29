import logobmtips from "../../assets/logobmtips.png";
export default function Header() {
    return (
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
        <button className="bg-green rounded text-white font-bold text-base m-2 p-4 w-40">
          Nosso Grupo
        </button>
      </div>
    )
}