const Usuario = require('../models/Usuario');
const createHash = require('crypto');

const login = async (req, res) => {
    //vemos si los parametros son nulos
    if (req.body.correoElectronico == null || req.body.password == null || req.body.correoElectronico == "" || req.body.password == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    req.body.password = createHash.createHash('sha256').update(req.body.password).digest('hex');//seteamos la contra como una encriptada
    //mandamos a buscar el usuario por su password y su usuario
    const usuarioEncontrado = await Usuario.findOne({ correoElectronico: req.body.correoElectronico, password: req.body.password });

    if (usuarioEncontrado) {
        res.json({ usuarioEncontrado });
    } else {
        res.send(null);
    }
}

const traerUsuarioPorId = async (req, res) => {
    //vemos si los parametros son nulos
    if (req.query.id == null || req.query.id == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    //mandamos a buscar el usuario por su password y su usuario
    const usuarioEncontrado = await Usuario.findById({ _id: req.query.id });

    if (usuarioEncontrado) {
        res.json({ usuarioEncontrado });
    } else {
        res.send(null);
    }
}

const crearUsuario = async (req, res) => {
    //vemos si los parametros son nulos
    if (req.body.correoElectronico == null || req.body.password == null || req.body.correoElectronico == "" || req.body.password == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    req.body.rol = 'Comun';//seteamos el rol como comun
    req.body.password = createHash.createHash('sha256').update(req.body.password).digest('hex');//seteamos la contra como una encriptada
    try{
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
    }catch(MongoBulkWriteError){
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
    }


}

const crearUsuarioAdminOPaqueteria = async (req, res) => {
    //vemos si los parametros son nulos
    if (req.body.correoElectronico == null || req.body.password == null || req.body.correoElectronico == "" || req.body.password == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    req.body.password = createHash.createHash('sha256').update(req.body.password).digest('hex');//seteamos la contra como una encriptada
    
    try {
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
    } catch (MongoBulkWriteError) {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
    }

}

const mostarUsuariosAdminYPqueteria = async (req, res) => {
    const usuarios = await Usuario.find({ $or: [{ rol: { $eq: "Paqueteria" } }, { rol: { $eq: "Administrador" } }] });
    res.json(usuarios);
}


const editarUsuario = async (req, res) => {
    const nuevaInfo = req.body.nuevaInfo;
    const id = req.body.id;
    //vemos si los parametros son nulos
    if (nuevaInfo.correoElectronico == null || nuevaInfo.password == null || nuevaInfo.correoElectronico == "" || nuevaInfo.password == ""
        || nuevaInfo.rol == null || nuevaInfo.rol == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }

    nuevaInfo.password = createHash.createHash('sha256').update(nuevaInfo.password).digest('hex');//seteamos la contra como una encriptada
    
    const edicion = await Usuario.findOneAndUpdate({ _id: id }, {
        correoElectronico: nuevaInfo.correoElectronico,
        password: nuevaInfo.password, 
        rol: nuevaInfo.rol
    });//mandamos a guardar al usuario en la db

    if (edicion) {//si todo fue bien tonces revolvemos true
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
    crearUsuario: crearUsuario,
    crearUsuarioAdminOPaqueteria: crearUsuarioAdminOPaqueteria,
    mostarUsuariosAdminYPqueteria: mostarUsuariosAdminYPqueteria,
    traerUsuarioPorId: traerUsuarioPorId,
    editarUsuario:editarUsuario
}