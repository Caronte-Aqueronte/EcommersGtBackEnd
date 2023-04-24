const express = require('express');
const articuloController = require("../controllers/PedidoController");
const router = express.Router();



router.get('/mostrarPedidos', articuloController.mostrarPedidos);//definiendo rutas

module.exports = router;//exporar el routers