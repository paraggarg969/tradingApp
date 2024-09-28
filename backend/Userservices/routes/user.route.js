const express = require("express");
const routes = express.Router();

const userController = require("../controllers/user.Controller");

routes.post('/',userController.registerUser);
routes.get('/', userController.getUser);
routes.get('/:id', userController.getUserById);
routes.put('/id:', userController.updateUserById);
routes.delete('/id:', userController.deleteUserById);

module.exports = routes;