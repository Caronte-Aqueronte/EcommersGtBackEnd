const express = require('express');
const articuloController = require("../controllers/ArticuloController");
const router = express.Router();
const storage = require('../config/multer');
const multer = require('multer');
const uploader = multer({storage}).single('file');//indicamos que solo se recibira una imagen en un parametro 'file'

router.post('/crear-articulo', uploader, articuloController.crearArticulo);//definiendo ruta para crear archivo
router.post('/editarImg', uploader, articuloController.editarImagenDeArticulo);//definiendo ruta para editar img
router.post('/editarInfo', uploader, articuloController.editarInfoDeArticulo);//definiendo ruta para editar img
router.get('/mostrar-articulos', articuloController.mostrarArticulos);//definiendo rutas
router.get('/mostrar-articulos-de-usuario', articuloController.mostrarArticulosDeUsuario);//definiendo rutas
router.get('/bucarArticuloPorId', articuloController.buscarPorId);//definiendo rutas
router.get('/mostrarNoPublicados', articuloController.mostrarArticulosSinConfirmar);//definiendo rutas

module.exports = router;//exporar el routers