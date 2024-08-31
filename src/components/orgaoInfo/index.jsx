import { Contrato } from "../contrato";
import "./index.css";

export function OrgaoInfo({ contratoInfo }) {
  let totalValueContracts = 0;
  if (contratoInfo != undefined) {
    contratoInfo.data.forEach((element) => {
      totalValueContracts += element.valorGlobal;
    });
  }
  return (
    <body>
      {contratoInfo == undefined ? (
        <>
          <div className="orgaoInfo">
            <div>
              <h2>Nome do orgão</h2>
              <span>Poder: </span>
              <span>Esfera:</span>
            </div>
            <div>
              <h2>Valor total dos contratos recebidos</h2>
              <span>R$ {totalValueContracts}</span>
            </div>
          </div>
          <ul className="contratos"></ul>
        </>
      ) : (
        <>
          <div className="orgaoInfo">
            <div>
              <h2>{contratoInfo.data[0].orgaoEntidade.razaoSocial}</h2>
              <span>Poder: {contratoInfo.data[0].orgaoEntidade.poderId}</span>
              <span>Esfera:{contratoInfo.data[0].orgaoEntidade.esferaId}</span>
            </div>
            <div>
              <h2>Valor total dos contratos recebidos</h2>
              <span>R$ {totalValueContracts}</span>
            </div>
          </div>
          <ul className="contratos">
            {contratoInfo.data.map((contratoInfo) => (
              <Contrato key={contratoInfo} contratoInfo={contratoInfo} />
            ))}
          </ul>
        </>
      )}
    </body>
  );
}
