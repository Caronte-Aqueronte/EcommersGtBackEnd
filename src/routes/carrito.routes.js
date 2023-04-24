const express = require('express');

const carritoController = require("../controllers/CarritoController");

const multer = require('multer');
const storage = require('../config/multer');
const uploader = multer({storage}).single('file');//indicamos que solo se recibira una imagen en un parametro 'file'

const router = express.Router();

router.post('/ingresarProductoACarrito', uploader, carritoController.ingresarProductoACarrito);//ruta para ingresar producto a carrito
router.post('/borrarDelCarrito', carritoController.borrarDelCarrito);//ruta para eliminar un articulo del carrito del usuario
router.post('/borraTodoElCarrito', carritoController.borraTodoElCarrito);//ruta para eliminar todo el carrito de un usuario
router.get('/mostrarCarritoDeUsuario', carritoController.mostrarCarritoDeUsuario);//ruta para mostrar el carrido de un usuario
router.post('/pagarCarrito', carritoController.pagarCarrito);//ruta para mostrar el carrido de un usuario
module.exports = router;//exporar el routers