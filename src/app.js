import express from "express";
import routes from "./routes";

import "./database"

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

export default new App().server;
//importa o modulo de conexão com o server