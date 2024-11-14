const mysql = require("mysql2/promise");
const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selecionaTodosClientes() {
  // await = só executa a linha abaixo quando o BD retornar algo
  const resultados = await client.query("SELECT * FROM CLIENTES");
  // 0 = retornar os dados da tabela CLIENTES
  return resultados[0];
}

module.exports = {
   selecionaTodosClientes
}