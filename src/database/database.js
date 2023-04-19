const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb://127.0.0.1:27017/market-place", {
        useNewURLParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MONGO DB CONECTADO");
    }).catch((err) => {
        return console.log(`Erro na conexão com o banco: ${err}`);
    })
}

module.exports = connectToDatabase;