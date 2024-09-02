# PNCP-Back-End
Aplicação responsável pelo front-end de um projeto que estou desenvolvendo, onde utilizo a API do Portal Nacional de Contratações Públicas para obter informações sobre contratos de um determinado órgão público.


### Bibliotecas externas untilizadas:
- React + Vite
- Axios
- React-Datepicker
- React-Dom

## Funções:

- Possui um layout mobile.
- Verificação de contratos de acordo com um CNPJ informado, período inicial da pesquisa e período final.
- Armazenar em um banco de dados.

## Como utilizar:
Para utilizar de forma correta, informe uma data válida e um CNPJ válido. Será retornado na tela as informações que foram consultadas sobre aquele órgão, bem como os contratos e o valor total dos contratos. Lembre-se de conectar corretamente sua API dentro do arquivo api/apiPT.js.
