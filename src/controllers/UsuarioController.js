const Usuario = require('../models/Usuario');
const createHash = require('crypto');

const login = async (req, res) => {
    //vemos si los parametros son nulos
    if (req.body.correoElectronico == null || req.body.password == null || req.body.correoElectronico == "" ||req.body.password == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    req.body.password = createHash.createHash('sha256').update(req.body.password).digest('hex');//seteamos la contra como una encriptada
    //mandamos a buscar el usuario por su password y su usuario
    const usuarioEncontrado = await Usuario.findOne({ correoElectronico: req.body.correoElectronico, password: req.body.password });
    
    if (usuarioEncontrado) {
        res.json({ usuarioEncontrado});
    }else{
        res.send(null);
    }
}

const crearUsuario = async (req, res) => {
    //vemos si los parametros son nulos
    if (req.body.correoElectronico == null || req.body.password == null || req.body.correoElectronico == "" ||req.body.password == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    req.body.rol = 'Comun';//seteamos el rol como comun
    req.body.password = createHash.createHash('sha256').update(req.body.password).digest('hex');//seteamos la contra como una encriptada
    const insercion = await Usuario.insertMany(req.body);//mandamos a guardar al usuario en la db
    if (insercion) {//si todo fue bien tonces revolvemos true
        res.json({
            respuesta: true
        });
    } else {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
    }
}

module.exports = {
    login: login,
    crearUsuario: crearUsuario
}