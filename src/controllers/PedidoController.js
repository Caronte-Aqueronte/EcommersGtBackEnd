const Pedido = require('../models/Pedido');

/**
 * Busca todos los pedidos de un usuario y lo envia
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const mostrarPedidos = async (req, res) => {
    const usuario = req.query.usuario;//estraer el usuario
    if (!usuario || usuario == "") {//si los parametros estan vacios o nulos devolvemos null
        res.send(null);
        return;
    }

    const pedidosDeUsuario = await Pedido.find({ usuarioComprador: usuario });//mandar a buscae los pedidos del usuario

    res.json(pedidosDeUsuario);
}

/**
 * Busca todos los pedidos que estan en curso y los envia
 * @param {*} req 
 * @param {*} res 
 */
const mostrarPedidosPendientes = async (req,res) =>{
    const pedidosPendientes = await Pedido.find({ estadoEntrega: "En curso" });//mandar a buscae los pedidos pendientes
    res.json(pedidosPendientes);
}

/**
 * Cambia el estado de un pedido a Entregado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const entregarPedido = async(req,res) => {
    const pedido = req.body;
    if(pedido == null){
        res.json({respuesta:false});
        return;
    }

    const pedidoActualizado = await Pedido.findByIdAndUpdate({ _id: pedido._id }, {estadoEntrega: "Entregado"});

    if(pedidoActualizado){
        res.json({respuesta:true});
    }else{
        res.json({respuesta:false});
    }
}

/**
 * Cambia el estado de un pedido a Entregado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const buscarPedidoPorId = async(req,res) => {
    const id = req.query.id;
    if(id == null || id == ""){
        res.send(null);
        return;
    }

    const pedido = await Pedido.findById({_id: id });

    if(pedido){
        res.json(pedido);
    }else{
        res.json(pedido);
    }
}

/**
 * Cambia la fecha de un pedido
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const editarInfoDeUnPedido = async(req,res) => {
    const id = req.body.id;//obtene rel id delmpedido
    const nuevaFecha = req.body.nuevaFecha;//obtener la nueva fecha
    if(id == null || id == "" || nuevaFecha == null || nuevaFecha == ""){
        res.send(null);
        return;
    }

    const edicionPedido = await Pedido.findByIdAndUpdate({_id: id }, {fechaEntrega: nuevaFecha});

    if(edicionPedido){
        res.json({respuesta : true});
    }else{
        res.json({respuesta : false});
    }
}
module.exports = {
    mostrarPedidos: mostrarPedidos,
    mostrarPedidosPendientes:mostrarPedidosPendientes,
    entregarPedido:entregarPedido,
    buscarPedidoPorId:buscarPedidoPorId,
    editarInfoDeUnPedido:editarInfoDeUnPedido
}
