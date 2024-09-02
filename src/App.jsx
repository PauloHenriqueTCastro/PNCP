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
  //código reponsavel por formatar data para "ANOMESDIA".
  const dateFormat = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = "" + d.getFullYear();

    if (month.length < 2) month = "0" + month;

    if (day.length < 2) day = "0" + day;

    return "" + year + month + day;
  };
  //código responsavel por formatar o cnpj para "00000000000000"
  const cnpjFormat = (cnpj) => {
    if (typeof cnpj !== "string") {
      throw new Error("CNPJ deve ser uma string");
    }
    return cnpj.replace(/[./-]/g, "");
  };
  //código responsavel por gerar a pesuisa na API PNCP.
  const searchSubmit = async () => {
    //requisição por pegar as informações de acordo com o CNPJ na API PNCP.
    const response = await apiPNCP
      .get("/v1/contratos", {
        params: {
          dataInicial: dateFormat(startDate),
          dataFinal: dateFormat(finalDate),
          cnpjOrgao: cnpjFormat(cnpjConsult),
          pagina: 1,
          tamanhoPagina: 500,
        },
      })
      //código responsável verificar e armazenar o response que vem da API.
      .then(function (response) {
        if (response.data != "") {
          setOrgaoInfo(response);
        }
        console.log(response);
        //código responsável por criar um objeto que se enquadra na requisição do banco de dados.
        const newBodies = response.data.data.map((element) => ({
          cnpjPublicOrganization: element.orgaoEntidade.cnpj,
          startDate: element.VigenciaInicio,
          endDate: element.dataVigenciaFim,
          supplier: element.nomeRazaoSocialFornecedor,
          object: element.objetoContrato,
          initialValue: element.valorInicial,
        }));
        //código responsável concatenar todos os objetos gerados dentro de um array.
        setNewBodyContractApi((prevState) => [...prevState, ...newBodies]);
      })
      //código responsável capturar os possíveis erro que podem retornar da API PNCP.
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
  //código responsável por analisar se foi gerado um novo objeto que se enquadra no na requisição para a API e fazer o lançamento
  //do mesmo nela.
  useEffect(() => {
    //código responsável por fazer o envio dos contratos para a API PT que fez conexão com o banco de dados que criei.
    const sendData = async () => {
      const response2 = await apiPT
        .post("", newBodyContractApi)
        //código responsável por retornar a resposta da API PT.
        .then(function (response) {
          console.log(response);
        })
        //código responsável por retornar possíveis erros da API PT.
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
  //retorno do componente APP.
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
