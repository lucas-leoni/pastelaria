const { request, response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const DB = {
  pasteis: [
    {
      id: 100,
      name: "Pastel de Carne",
      price: 10.0,
    },
    {
      id: 101,
      name: "Pastel de Frango",
      price: 10.0,
    },
    {
      id: 102,
      name: "Pastel de Queijo",
      price: 10.0,
    },
  ],
  clientes: [
    {
      id: 100,
      nome: "Lucas Leoni",
      email: "20201107@ielusc.br",
      endereco: {
        rua: "Arnaldo Davet",
        numero: 520,
        bairro: "Espinheiros",
        cidade: "Joinville",
        estado: "Santa Catarina",
        cep: "89228-560",
      },
    },
    {
      id: 101,
      nome: "Marcos Leoni",
      email: "marcos@gmail.com",
      endereco: {
        rua: "Arnaldo Davet",
        numero: 520,
        bairro: "Espinheiros",
        cidade: "Joinville",
        estado: "Santa Catarina",
        cep: "89228-560",
      },
    },
    {
      id: 102,
      nome: "Luciana Leoni",
      email: "luciana@gmail.com",
      endereco: {
        rua: "Arnaldo Davet",
        numero: 520,
        bairro: "Espinheiros",
        cidade: "Joinville",
        estado: "Santa Catarina",
        cep: "89228-560",
      },
    },
  ],
};

// criando uma rota que retorne todos os pastéis
app.get("/api/pasteis", (request, response) => {
  response.send(DB.pasteis);
});

// adicionando um novo pastel
app.post("/api/pastel", (req, res) => {
  const { name, price } = req.body;
  DB.pasteis.push({
    id: Math.floor(Math.random() * 10 + 1),
    name,
    price,
  });
  res.send({ message: "Uhuul, novo pastel adicionado com sucesso!" });
});

// criando uma rota que retorna um pastel por id
app.get("/api/pastel/:pastelId", (req, res) => {
  const idUser = req.params.pastelId;
  if (isNaN(idUser)) {
    res.statusCode = 400;
    res.send("Ops, o id informado não é um número.");
  } else {
    const id = parseInt(idUser);
    const pastel = DB.pasteis.find((index) => index.id === id);
    if (pastel !== undefined) {
      res.statusCode = 200;
      res.json(pastel);
    } else {
      res.sendStatus(404);
    }
  }
});

// atualizando um pastel por id
app.put("/api/pastel/:pastelId", (req, res) => {
  const idUser = req.params.pastelId;
  if (isNaN(idUser)) {
    res.statusCode = 400;
    res.send("Ops, o id informado não é um número.");
  } else {
    const id = parseInt(idUser);
    const pastel = DB.pasteis.findIndex((index) => index.id === id);
    if (pastel === -1) {
      res.sendStatus(404);
    } else {
      const { id, name, price } = req.body;
      DB.pasteis.splice(pastel, 1, {
        id,
        name,
        price,
      });
      res.statusCode = 200;
      res.json({ message: "Pastel atualizado com sucesso!" });
    }
  }
});

// deletar um pastel a partir de um id associado
app.delete("/api/pastel/:pastelId", (req, res) => {
  const idUser = req.params.pastelId;
  if (isNaN(idUser)) {
    res.statusCode = 400;
    res.send("Ops, o id informado não é um número.");
  } else {
    const id = parseInt(idUser);
    const pastel = DB.pasteis.findIndex((index) => index.id === id);
    if (pastel === -1) {
      // usuário informou um id que não existe na base
      res.sendStatus(404);
    } else {
      DB.pasteis.splice(pastel, 1);
      res.statusCode = 200;
      res.json({ message: "Uhull, pastel removido com sucesso!" });
    }
  }
});

// criando uma rota que retorne todos os clientes
app.get("/api/clientes", (request, response) => {
  response.send(DB.clientes);
});

// adicionando um novo cliente
app.post("/api/cliente", (req, res) => {
  const {
    nome,
    email,
    endereco = { rua, numero, bairro, cidade, estado, cep },
  } = req.body;
  DB.clientes.push({
    id: Math.floor(Math.random() * 10 + 1),
    nome,
    email,
    endereco,
  });
  res.send({ message: "Uhuul, novo cliente adicionado com sucesso!" });
});

// criando uma rota que retorna um cliente por id
app.get("/api/cliente/:clienteId", (req, res) => {
  const idUser = req.params.clienteId;
  if (isNaN(idUser)) {
    res.statusCode = 400;
    res.send("Ops, o id informado não é um número.");
  } else {
    const id = parseInt(idUser);
    const cliente = DB.clientes.find((index) => index.id === id);
    if (cliente !== undefined) {
      res.statusCode = 200;
      res.json(cliente);
    } else {
      res.sendStatus(404);
    }
  }
});

// atualizando um cliente por id
app.put("/api/cliente/:clienteId", (req, res) => {
  const idUser = req.params.clienteId;
  if (isNaN(idUser)) {
    res.statusCode = 400;
    res.send("Ops, o id informado não é um número.");
  } else {
    const id = parseInt(idUser);
    const cliente = DB.clientes.findIndex((index) => index.id === id);
    if (cliente === -1) {
      res.sendStatus(404);
    } else {
      const { id, nome, email, endereco } = req.body;
      DB.clientes.splice(cliente, 1, {
        id,
        nome,
        email,
        endereco,
      });
      res.statusCode = 200;
      res.json({ message: "cliente atualizado com sucesso!" });
    }
  }
});

// deletar um cliente a partir de um id associado
app.delete("/api/cliente/:clienteId", (req, res) => {
  const idUser = req.params.clienteId;
  if (isNaN(idUser)) {
    res.statusCode = 400;
    res.send("Ops, o id informado não é um número.");
  } else {
    const id = parseInt(idUser);
    const cliente = DB.clientes.findIndex((index) => index.id === id);
    if (cliente === -1) {
      // usuário informou um id que não existe na base
      res.sendStatus(404);
    } else {
      DB.clientes.splice(cliente, 1);
      res.statusCode = 200;
      res.json({ message: "Uhull, cliente removido com sucesso!" });
    }
  }
});

// iniciando o app na porta 3000
app.listen(3000, () => {
  console.log("API RUNNING, http://localhost:3000");
});
