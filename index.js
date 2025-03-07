 const express = require("express");
 const server = express();
//query params = ?nome = Ismael&idade=21 -> são valores que são 
// passados na rota no caso da rote seria separado por barras

// server.get("/hello", (req, res) => {
//   const {nome, idade} = req.query;

//   return res.json({
//     title: "hello world!",
//     message: `Olá ${nome} tudo bem !?`, 
//     idade: idade
//   });
//     //interpolação de strings no js
//     //passando a rota dessa forma por exemplo http://localhost:3001/hello?nome=Ismael
//     //ja conseguiriamos ver o nome na mensagem
// })


// //dessa forma o parametro ira passar apos a /
// server.get("/hello/:nome/:idade", (req, res) => {
//   const {nome, idade} = req.params;

//   return res.json({
//     title: "Pagina Exemplo",
//     message: `Olá ${nome} tudo bem!? teste`,
//     idade: idade
//   });
// });
// server.listen(3001);


server.use(express.json());

let customers =[
  {id: 1, name: "Ismael", site: "http://example1"},
  {id: 2, name: "Guedes", site: "http://example2"},
  {id: 3, name: "Miguel", site: "http://example3"},
];


server.get("/customers", (req, res) => {
  return res.json(customers);
});

server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find(item => item.id === id);
  const status = customer ? 200 : 404;
  //parseInt muda o valor de id para inteiro

  return res.status(status).json(customer);
});

//create
server.post("/customers", (req, res) => {
  const { name, site } = req.body; // conteúdo JSON da requisição

  // Corrigido: pegar o último ID corretamente
  const id = customers.length > 0 ? customers[customers.length - 1].id + 1 : 1;

  const newCustomer = { id, name, site };
  customers.push(newCustomer);

  return res.status(201).json(newCustomer); // Retornar o novo cliente criado
});


server.listen(3001);
