const express = require("express");
const routes = express.Router();

const userController = require("../controllers/user.Controller");

routes.post('/',userController.registerUser);

module.exports = routes;