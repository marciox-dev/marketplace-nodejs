const express = require('express');
const connectToDatabase = require("./src/database/database"); // arquivo de conexão com o banco

const usuario = require("./src/router/usuario.router"); //arquivo de rota do usuário

const app = express();

const port = 3000;

app.use(express.json());



connectToDatabase(); //conectando com o banco


app.use("/usuario", usuario); // chamando a rota do usuário

app.get("/", (req, res) => {
    res.send({
        message: "Bem vindo ao nosso Market-Place"
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 