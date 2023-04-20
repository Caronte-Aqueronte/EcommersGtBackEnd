const express = require('express');
const articuloController = require("../controllers/ArticuloController");
const router = express.Router();
const storage = require('../config/multer');
const multer = require('multer');
const uploader = multer({storage}).single('file');//indicamos que solo se recibira una imagen en un parametro 'file'

router.post('/crear-articulo', uploader, articuloController.crearArticulo);//definiendo ruta para crear archivo
router.get('/mostrar-articulos', articuloController.mostrarArticulos);//definiendo rutas

module.exports = router;//exporar el routers