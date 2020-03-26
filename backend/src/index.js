const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * métodos HTTP
 * 
 * GET: Busca/listar uma infromação do back-end
 * POST:  Cria uam infromação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deleta uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros noemados enviados na rota após o simbolo de interrogação
  * geralmente servem para filtros, paginação etc.
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * 
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc.
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users'). select('*')
    */


