import "./reset.css";
import { Header } from "./components/header";
import { OrgaoInfo } from "./components/orgaoInfo";
import { api } from "./api/api";
import { useState, useEffect } from "react";

function App() {
  const [cnpjConsult, setCnpjConsult] = useState("");
  const [orgaoInfo, setOrgaoInfo] = useState({});

  const searchSubmit = async () => {
    const response = await api.get("/v1/contratos", {
      params: {
        dataInicial: "20230801",
        dataFinal: "20230802",
        cnpjOrgao: cnpjConsult,
        pagina: 1,
        tamanhoPagina: 500,
      },
    });
    setOrgaoInfo(response);
  };

  useEffect(() => {
    console.log(orgaoInfo.data);
  }, [orgaoInfo]);

  return (
    <div className="App">
      <Header
        setCnpjConsult={setCnpjConsult}
        cnpjConsult={cnpjConsult}
        searchSubmit={searchSubmit}
      />
      <OrgaoInfo contratoInfo={orgaoInfo.data} />
    </div>
  );
}

export default App;
