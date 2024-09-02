import "./index.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Header({
  setCnpjConsult,
  cnpjConsult,
  searchSubmit,
  startDate,
  setStartDate,
  finalDate,
  setFinalDate,
}) {
  //retorno do componente header.
  //Possui um componente chamado DatePicker. Ele é responsavel por criar um mini calendario que pode ser utilizado para adicionar data no campo selecionado.
  return (
    <header>
      <h1>PNCP Consulta</h1>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="formOrg"
          placeholderText="Insira uma data inicial"
        />
        <DatePicker
          selected={finalDate}
          onChange={(date) => setFinalDate(date)}
          className="formOrg"
          placeholderText="Insira uma data final"
        />
        <input
          value={cnpjConsult}
          onChange={(ev) => setCnpjConsult(ev.target.value)}
          id="cnpjValue"
          type="text"
          placeholder="Insira um CNPJ para consultar"
          className="formOrg"
        />
        <button onClick={searchSubmit}>Procurar</button>
      </div>
    </header>
  );
}
