const express = require('express');

const tarjetaController = require("../controllers/TarjetaController");

const router = express.Router();

router.post('/guardarTarjeta', tarjetaController.guardarTarjeta);//ruta para ingresar producto a carrito
router.get('/mostrarTarjetasDeUsuario', tarjetaController.mostrarTarjetasDeUsuario);//ruta para ingresar producto a carrito

module.exports = router;//exporar el routers