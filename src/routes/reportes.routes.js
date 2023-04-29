const express = require('express');

const reporteController = require("../controllers/ReportesController");

const router = express.Router();

router.get('/diezProductosMasVendidos', reporteController.diezProductosMasVendidos);//definiendo rutas
router.get('/cincoClientesQueMasGananciaGeneran', reporteController.cincoClientesQueMasGananciaGeneran);
router.get('/cincoClientesQueMasVentasTienen', reporteController.cincoClientesQueMasVentasTienen);
router.get('/diezClientesQueMasPedidosGeneran',reporteController.diezClientesQueMasPedidosGeneran);
router.get('/diezClientesConMasProductos', reporteController.diezClientesConMasProductos);

module.exports = router;//exporar el routers