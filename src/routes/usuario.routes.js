const express = require('express');

const usuarioController = require("../controllers/UsuarioController");

const router = express.Router();

router.post('/login', usuarioController.login);//definiendo rutas
router.post('/crearUsuario', usuarioController.crearUsuario);
router.post('/crearUsuarioAdminOPaqueteria', usuarioController.crearUsuarioAdminOPaqueteria);
router.post('/editarUsuario', usuarioController.editarUsuario);

router.get('/mostarUsuariosAdminYPqueteria', usuarioController.mostarUsuariosAdminYPqueteria);
router.get('/traerUsuarioPorId', usuarioController.traerUsuarioPorId);

module.exports = router;//exporar el routers