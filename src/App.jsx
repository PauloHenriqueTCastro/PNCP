import "./reset.css";
import { Header } from "./components/header";
import { OrgaoInfo } from "./components/orgaoInfo";
import { apiPNCP } from "./api/apiPNCP";
import { useEffect, useState } from "react";
import { apiPT } from "./api/apiPT";

function App() {
  const [cnpjConsult, setCnpjConsult] = useState("");
  const [startDate, setStartDate] = useState();
  const [finalDate, setFinalDate] = useState();
  const [orgaoInfo, setOrgaoInfo] = useState({});
  const [newBodyContractApi, setNewBodyContractApi] = useState([]);

  const dateFormat = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = "" + d.getFullYear();

    if (month.length < 2) month = "0" + month;

    if (day.length < 2) day = "0" + day;

    return "" + year + month + day;
  };

  const searchSubmit = async () => {
    const response = await apiPNCP
      .get("/v1/contratos", {
        params: {
          dataInicial: dateFormat(startDate),
          dataFinal: dateFormat(finalDate),
          cnpjOrgao: cnpjConsult,
          pagina: 1,
          tamanhoPagina: 500,
        },
      })
      .then(function (response) {
        if (response.data != "") {
          setOrgaoInfo(response);
        }

        console.log(response);

        const newBodies = response.data.data.map((element) => ({
          cnpjPublicOrganization: element.orgaoEntidade.cnpj,
          startDate: element.VigenciaInicio,
          endDate: element.dataVigenciaFim,
          supplier: element.nomeRazaoSocialFornecedor,
          object: element.objetoContrato,
          initialValue: element.valorInicial,
        }));

        setNewBodyContractApi((prevState) => [...prevState, ...newBodies]);
      })
      .catch(function (error) {
        if (error.response) {
          console.log("Erro na resposta da API:", error.response.data);
          console.log("Status do erro:", error.response.status);
          console.log("Cabeçalhos do erro:", error.response.headers);
        } else if (error.request) {
          console.log("Nenhuma resposta recebida:", error.request);
        } else {
          console.log("Erro ao configurar a requisição:", error.message);
        }
        console.log("Config da requisição que causou o erro:", error.config);
      });
  };

  useEffect(() => {
    const sendData = async () => {
      const response2 = await apiPT
        .post("", newBodyContractApi)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          if (error.response) {
            console.log("Erro na resposta da API:", error.response.data);
            console.log("Status do erro:", error.response.status);
            console.log("Cabeçalhos do erro:", error.response.headers);
          } else if (error.request) {
            console.log("Nenhuma resposta recebida:", error.request);
          } else {
            console.log("Erro ao configurar a requisição:", error.message);
          }
          console.log("Config da requisição que causou o erro:", error.config);
        });
    };

    sendData();
  }, [newBodyContractApi]);
  return (
    <div className="App">
      <Header
        cnpjConsult={cnpjConsult}
        setCnpjConsult={setCnpjConsult}
        startDate={startDate}
        setStartDate={setStartDate}
        finalDate={finalDate}
        setFinalDate={setFinalDate}
        searchSubmit={searchSubmit}
      />
      <OrgaoInfo contratoInfo={orgaoInfo.data} />
    </div>
  );
}

export default App;
