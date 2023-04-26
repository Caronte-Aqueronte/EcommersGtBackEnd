const express = require('express');
const pedidosController = require("../controllers/PedidoController");
const router = express.Router();



router.get('/mostrarPedidos', pedidosController.mostrarPedidos);//definiendo rutas
router.post('/entregarPedido', pedidosController.entregarPedido)
router.get('/mostrarPedidosPendientes', pedidosController.mostrarPedidosPendientes);//definiendo rutas
router.get('/buscarPedidoPorId', pedidosController.buscarPedidoPorId);

module.exports = router;//exporar el routers