require("dotenv").config();
const express = require("express");
const app = express();
const db  = require("./db");

// Evitar problema com o CORS
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  next();
});

// permite que o backend consigra trabalhar com json
// transforma bytes em objeto --> json
app.use(express.json());


/******************* ROTAS  *******************/

app.get('/clientesBD', async(request, response) => {
  const resultados = await db.selecionaTodosClientes();
  response.json(resultados);
  // a requisição foi executada com sucesso
  response.sendStatus(200);
});



/********** COLOCANDO API NO AR **********/
app.listen(process.env.PORTA, (erro) => {
  if (erro) {
    console.log("ERRO na API em NODEJS");
    return;
  }
  console.log("API em NODEJS no ar na porta 3000");
});