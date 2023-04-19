const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    endereços: [
        {
            rua: { type: String, required: true },
            numero: { type: Number, required: true },
            complemento: { type: String, required: false },
            CEP: { type: String, required: true },
            createdAt: { type: Date, required: true },
        }
    ],
    createdAt: { type: Date, required: true },
    produtos_favoritos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, reequired: true, unique: true, ref: "produtos" },
            createdAt: { type: Date, required: true }
        }
    ],
    admin: { type: Boolean, required: true, default: false },
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;