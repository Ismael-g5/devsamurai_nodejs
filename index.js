const express = require("express");
const server = express();

//query params = ?nome = Ismael&idade=21 -> são valores que são 
// passados na rota no caso da rote seria separado por barras



server.get("/hello", (req, res) => {
  
  const {nome, idade} = req.query;

  return res.json({
    title: "hello world!",
    message: `Olá ${nome} tudo bem !?`, 
    idade: idade
  });
    //interpolação de strings no js
    //passando a rota dessa forma por exemplo http://localhost:3001/hello?nome=Ismael
    //ja conseguiriamos ver o nome na mensagem
})


//dessa forma o parametro ira passar apos a /
server.get("/hello/:nome/:idade", (req, res) => {
  const {nome, idade} = req.params;

  return res.json({
    title: "Pagina Exemplo",
    message: `Olá ${nome} tudo bem!?`,
    idade: idade
  });
});



server.listen(3001);


