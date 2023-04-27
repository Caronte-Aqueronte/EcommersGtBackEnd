const Carrito = require('../models/Carrito');
const Pedido = require('../models/Pedido');

const ingresarProductoACarrito = async (req, res) => {
    const idProducto = req.body.id;
    const usuarioCarrito = req.body.usuario;
    //vemos si los parametros son nulos
    if (idProducto == null || usuarioCarrito == null || idProducto == "" || usuarioCarrito == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    //mandamos a buscar el usuario por su password y su usuario
    const insert = await Carrito.insertMany({ articulo_id: idProducto, usuario: usuarioCarrito });

    if (insert) {
        res.json({ respuesta: true });
    } else {
        res.json({ respuesta: false });
    }
}

const borrarDelCarrito = async (req, res) => {
    const idProducto = req.body.articulo_id;
    const nombreUsuario = req.body.usuario;
    //vemos si los parametros son nulos
    if (idProducto == null || idProducto == "" || nombreUsuario == null || nombreUsuario == "") {
        res.json({
            respuesta: false//si fue mal entonces devolver false
        });
        return;
    }
    //mandamos a borrar el articulo por medio del usuario y el id del articulo
    const deleteArticulo = await Carrito.deleteOne({ articulo_id: idProducto, usuario: nombreUsuario });
    //respondemos el estado del delete 
    if (deleteArticulo) {
        res.json({ respuesta: true });
    } else {
        res.json({ respuesta: false });
    }
}

/**
 * Elimina todo el carrito de un usuario por medio de su correo electronico
 * @param {*} req 
 * @param {*} res 
 */
const borraTodoElCarrito = async (req, res) => {
    const usuarioCarrito = req.body.usuario;
    //vemos si los parametros son nulos
    if (usuarioCarrito == null || usuarioCarrito == "") {
        res.send(null);
        return;
    }
    const eliminacion = await Carrito.deleteMany({ usuario: usuarioCarrito });
    //respondemos el estado del delete 
    if (eliminacion) {
        res.json({ respuesta: true });
    } else {
        res.json({ respuesta: false });
    }
}

const mostrarCarritoDeUsuario = async (req, res) => {
    const usuarioCarrito = req.query.usuario;
    //vemos si los parametros son nulos
    if (usuarioCarrito == null || usuarioCarrito == "") {
        res.send(null);
        return;
    }
    //si no esta vacio entonces podemos mandar a traer el carrito del usuario
    const carritoUsuario = await Carrito.aggregate([{ $lookup: { from: 'articulos', localField: 'articulo_id', foreignField: '_id', as: 'articulo' } }, { $match: { usuario: usuarioCarrito } }])
    if (carritoUsuario) { //si se pudo hacer el aggregate entonces mandamos los resultados, si no mandamos null
        res.json(carritoUsuario);
    } else {
        res.send(null);
    }
}

const pagarCarrito = async (req, res) => {
    const usuarioCarrito = req.body;//captirar el body

    if (usuarioCarrito.length <= 0) {//si el carrito esta vacio entonces retornamos falses
        res.json({ respuesta: false });
        return;
    }

    const articulosAVender = new Array();

    var total = 0.00;

    for (let x = 0; x < usuarioCarrito.length; x++) {//iteramos dentro del carrito para obtener cada uno de los articulos a vender
        articulosAVender.push(usuarioCarrito[x].articulo[0]);

        total = total + usuarioCarrito[x].articulo[0].precio;
    }//iterar en el body



    const fechaDeHoy = new Date(Date.now());


    const usuarioComprador = usuarioCarrito[0].usuario; //identificamos el usuario comprador
    const ganancia = total * (5 / 100);//la ganancia es igual a el total por el 5%
    //frcha de entrega del producto
    const fechaDeEntrega = new Date(fechaDeHoy.setDate(fechaDeHoy.getDate() + 5)).toISOString().slice(0,10);


    const pedidoGuardado = await Pedido.insertMany({
        usuarioComprador: usuarioComprador, articulos: articulosAVender,
        totalVenta: total, ganancia: ganancia, fechaEntrega: fechaDeEntrega
    });

    const eliminacionDeCarrito = await Carrito.deleteMany({ usuario: usuarioComprador });

    if (pedidoGuardado && eliminacionDeCarrito) {
        res.json({ respuesta: true });
    } else {
        res.json({ respuesta: false });
    }
}

module.exports = {
    ingresarProductoACarrito: ingresarProductoACarrito,
    mostrarCarritoDeUsuario: mostrarCarritoDeUsuario,
    borrarDelCarrito: borrarDelCarrito,
    borraTodoElCarrito: borraTodoElCarrito,
    pagarCarrito: pagarCarrito
}
