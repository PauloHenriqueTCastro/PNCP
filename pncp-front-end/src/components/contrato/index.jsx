import "./index.css";

export function Contrato() {
  return (
    <li>
      <h3>GAVA IMPRESSAO DIGITAL LTDA</h3>
      <div className="contractInfo">
        <span>Data de vigência inicial:</span>
        <p>2023-07-31</p>
        <span>Data de vigência final:</span>
        <p>2023-12-31</p>
        <span>Valor inicial do contrato</span>
        <p>R$ 1035.23</p>
      </div>
      <div className="objContract">
        <h4>Objeto de contrato:</h4>
        <p>
          SEGAT - COBRIR DESPESAS COM SERVIÇO DE IMPRESSÃO DE MAPAS EM PAPEL
          SULFITE NO TAMANHO A0 E A1, CONFORME DESPACHO SEAD/SEPLAN (5464943)
        </p>
      </div>
    </li>
  );
}
