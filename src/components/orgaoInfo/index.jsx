import { Contrato } from "../contrato";
import "./index.css";

export function OrgaoInfo() {
  return (
    <body>
      <div className="orgaoInfo">
        <div>
          <h2>Nome do orgão</h2>
          <span>Poder:</span>
          <span>Esfera:</span>
        </div>
        <div>
          <h2>Valor total dos contratos recebidos</h2>
          <span>R$ 2000.00</span>
        </div>
      </div>
      <ul className="contratos">
        <Contrato />
        <Contrato />
        <Contrato />
        <Contrato />
        <Contrato />
        <Contrato />
        <Contrato />
      </ul>
    </body>
  );
}
