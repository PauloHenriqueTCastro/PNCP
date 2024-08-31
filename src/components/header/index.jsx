import "./index.css";

export function Header({ setCnpjConsult, cnpjConsult, searchSubmit }) {
  return (
    <header>
      <h1>PNCP Consulta</h1>
      <div>
        <input
          value={cnpjConsult}
          onChange={(ev) => setCnpjConsult(ev.target.value)}
          id="cnpjValue"
          type="text"
          placeholder="Insira um CNPJ para consultar"
        />
        <button onClick={searchSubmit}>Procurar</button>
      </div>
    </header>
  );
}
