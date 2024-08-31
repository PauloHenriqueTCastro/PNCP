import "./index.css";

export function Contrato({ contratoInfo }) {
  return (
    <li>
      <h3>{contratoInfo.nomeRazaoSocialFornecedor}</h3>
      <div className="contractInfo">
        <span>Data de vigência inicial:</span>
        <p>{contratoInfo.dataVigenciaInicio}</p>
        <span>Data de vigência final:</span>
        <p>{contratoInfo.dataVigenciaFim}</p>
        <span>Valor inicial do contrato</span>
        <p>{contratoInfo.valorGlobal}</p>
      </div>
      <div className="objContract">
        <h4>Objeto de contrato:</h4>
        <p>{contratoInfo.objetoContrato}</p>
      </div>
    </li>
  );
}
