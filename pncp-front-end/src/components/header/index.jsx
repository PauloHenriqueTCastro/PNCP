import "./index.css";

export function Header() {
  return (
    <header>
      <h1>PNCP Consulta</h1>
      <div>
        <input type="text" placeholder="Insira um CNPJ para consultar" />
        <button>Procurar</button>
      </div>
    </header>
  );
}
