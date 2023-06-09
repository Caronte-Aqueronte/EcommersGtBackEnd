const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const model = mongoose.model;

const PedidoSchema = new Schema(

    {
        //datos generales
        usuarioComprador: String, //usuario que hace el pedido
        articulos: Array, //articulos que pertenecen al pedido

        //datos para la venta
        totalVenta: Number,
        ganancia: Number,
        fechaDeLaVenta: {type:String, default: moment().format("YYYY-MM-DD")},
        //datos para el pedido
        fechaEntrega: String, //fecha en que se entregara el pedido
        estadoEntrega: { type: String, default: "En curso" }//el estado de la entrega de un pedido
    }
);

module.exports = model('pedidos', PedidoSchema);