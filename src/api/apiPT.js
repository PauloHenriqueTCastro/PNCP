import axios from "axios";

export const apiPT = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 8000,
});
