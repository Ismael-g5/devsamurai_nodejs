const express = require("express");
const routes = require("./routes")
class App{
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() //camada entre o expresss e a aplicação
  {
      this.server.use(express.json());
  }
  routes(){
    this.server.use(routes);

  }
}

module.exports = new App().server;
//importa o modulo de conexão com o server