const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");

//ROTAS GET
router.get("/findById/:id", usuarioController.findUserByIdController);
router.get("/findAll", usuarioController.findAllUsersController);

//ROTAS POST
router.post("/create", usuarioController.createUserController);
router.post("/addAddress/:id", usuarioController.addUserAddressController);
router.post("/addFavProduct/:id", usuarioController.addUserFavProductController);

//ROTAS PUT
router.put("/update/:id", usuarioController.updateUserController);

//ROTAS DELETE
router.delete("/remove/:id", usuarioController.removeUserController);
router.delete("/removeAddress", usuarioController.removeUserAddressController);
router.delete("/removeFavProduct", usuarioController.removeUserFavProductController);

module.exports = router;
