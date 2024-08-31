import axios from "axios";

export const api = axios.create({
  baseURL: "https://pncp.gov.br/api/consulta",
  timeout: 10000,
});
