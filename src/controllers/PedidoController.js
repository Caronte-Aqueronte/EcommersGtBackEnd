const Pedido = require('../models/Pedido');

const mostrarPedidos = async (req, res) => {
    const usuario = req.query.usuario;//estraer el usuario
    if (!usuario || usuario == "") {//si los parametros estan vacios o nulos devolvemos null
        res.send(null);
        return;
    }

    const pedidosDeUsuario = await Pedido.find({ usuarioComprador: usuario });//mandar a buscae los pedidos del usuario

    res.json(pedidosDeUsuario);
}
module.exports = {
    mostrarPedidos: mostrarPedidos
}
