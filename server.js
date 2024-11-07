const express = require('express');
const aplicacao = express();

const clientes = require('./src/data/clientes.json')

// colocando no AR
aplicacao.listen(1324, () => {
    console.log("API NO AR");
})

// criando as ROTAS
aplicacao.get('/', (request,response) => {
    return response.json({ mensagem: "API FUNCIONANDO" })
})

aplicacao.get('/Clientes', (request,response) => {
    // response.status(200).json(clientes);
})