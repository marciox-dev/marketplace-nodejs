const express = require('express');
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco


const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuário
const auth = require("./src/router/auth.router"); //arquivo de rota autorização
const produto = require("./src/router/produto.router"); //arquivo de rota de produto
const categoria = require('./src/router/categoria.router');//arquivo de rota de categoria
const carrinho = require('./src/router/carrinho.router');//arquivo de rota de carrinho
const pedido = require('./src/router/pedido.router');//arquivo de rota de pedido
const docs = require('./src/router/docs.router');//arquivo de rota de docs

//const { CommandStartedEvent } = require('mongodb');

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors(
    {
        origin: "localhost:3001",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
    }
));

connectToDatabase(); //conectando com o banco

app.use("/usuario", usuario); // chamando a rota do usuário
app.use("/auth", auth); // chamando a rota de auth
app.use("/produto", produto); // chamando a rota de produto
app.use("/categoria", categoria); // chamando a rota de categoria
app.use("/carrinho", carrinho); // chamando a rota de carrinho
app.use("/pedido", pedido); // chamando a rota de pedido
app.use("/docs", docs); // chamando a rota de docs

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso Market-Place"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 