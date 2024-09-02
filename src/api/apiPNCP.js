import axios from "axios";

export const apiPNCP = axios.create({
  baseURL: "https://pncp.gov.br/api/consulta",
  timeout: 60000,
});
