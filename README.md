# API - Pastelaria do Godofredo

### Para rodar este projeto é necessário ter instalado: 

* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/) - ` npm install -g npm `

### Para verificar se você tem o Node e o NPM instalados execute os seguintes comandos:

* Node - ` node -v `
* NPM - ` npm -v `

### Para instalar as dependências deste projeto execute o seguinte comando:

* ` npm i `

# Documentação da API

> /api/pastel

|           ROTA          |     MÉTODO      |         DESCRIÇÃO                    |
| ----------------------- | --------------- | -------------------------------------|
| /api/pasteis            |       GET       | listar todos os pasteis              |
| /api/pastel             |       POST      | adicionar um novo pastel             |
| /api/pastel/pastelId    |       GET       | visualizar um pastel a partir do ID  |
| /api/pastel/pastelId    |       PUT       | atualizar um pastel a partir do ID   |
| /api/pastel/pastelId    |       DELETE    | remover um pastel a partir do ID     |


> /api/cliente

|           ROTA          |     MÉTODO      |         DESCRIÇÃO                    |
| ----------------------- | --------------- | ------------------------------------ |
| /api/clientes           |       GET       | listar todos os clientes             |
| /api/cliente            |       POST      | adicionar um novo cliente            |
| /api/cliente/clienteId  |       GET       | visualizar um cliente a partir do ID |
| /api/cliente/clienteId  |       PUT       | atualizar um cliente a partir do ID  |
| /api/cliente/clienteId  |       DELETE    | remover um cliente a partir do ID    |
