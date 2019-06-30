const express = require("express");

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = {  }

server.get("/users/:id", (req, res) => {
  //return res.send("Hello World!");

  //http://localhost:3000/users?nome=caio
  //const nome = req.query.nome;
  //return res.json({ message: `Hello ${nome}!` });

  //const id = req.params.id;
  const { id } = req.params;
  return res.json({ message: `Buscando o usuário ${id}` });
});

// localhost:3000/teste
server.listen(3000);
