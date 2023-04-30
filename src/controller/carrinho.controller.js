const CarrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try {
        res.status(200) .send(await CarrinhoService.findCarrinhoByIdService(req.params.id));
    } catch (err) {
       res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde!" });
        console.log(err.message);
    }
}

const findAllCarrinhosController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.findAllCarrinhosService())
    } catch (err) {
       res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde!" });
        console.log(err.message);
    }
}

const createCarrinhoController = async (req, res) => {
    try {
        const corpo = {
            ...req.body,
            userId: req.userId
        }
        res.status(201).send(await CarrinhoService.createCarrinhoService(corpo));
    }catch (err) {
       res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde!" });
        console.log(err.message);
    }
}

const updateCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.updateCarrinhoService(req.params.id, req.body));
    }catch (err) {
       res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde!" });
        console.log(err.message);
    }
}

const deleteCarrinhoController = async (req, res) => {
    try {
        res.status(200).send(await CarrinhoService.deleteCarrinhoService(req.params.id));
    }catch (err) {
       res.status(500).send({ message: "Erro inesperado, tente novamente mais tarde!" });
        console.log(err.message);
    }
}

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhosController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController
}