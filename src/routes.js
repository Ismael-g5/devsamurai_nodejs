import {Router} from "express";
import customers from "./app/controllers/CustomersController";



const routes = new Router();

//referencia o arquivo do controller, e logo abaixo eu chamo pra passar os
//metodos, assim como fizemos no index.js
routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("/customers/:id", customers.update);
routes.delete("/customers/:id", customers.destroy);





export default routes;