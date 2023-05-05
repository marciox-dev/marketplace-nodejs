const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const paginacao = require("../middleware/paginacao.middleware")

const authMiddleware = require("../middleware/auth.middleware");
const { validaUsuario, validaId } = require("../middleware/validacao.middleware")


//ROTAS GET
router.get("/findById/:id", authMiddleware, validaId, usuarioController.findUserByIdController);
router.get("/findAll", authMiddleware, paginacao, usuarioController.findAllUsersController);

//ROTAS POST
router.post("/create", authMiddleware, validaUsuario, usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaId, usuarioController.addUserAddressController);
router.post("/addFavProduct/:id", authMiddleware, validaId, usuarioController.addUserFavProductController);

//ROTAS PUT
router.put("/update/:id", authMiddleware, validaId, validaUsuario, usuarioController.updateUserController);

//ROTAS DELETE
router.delete("/remove/:id", authMiddleware, validaId, usuarioController.removeUserController);
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);
router.delete("/removeFavProduct/:id", authMiddleware, validaId, usuarioController.removeUserFavProductController);

module.exports = router;
