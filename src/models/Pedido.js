const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema;

const model = mongoose.model;

const PedidoSchema = new Schema(

    {
        carrito: String,
        fechaEntrega: Date,
        estadoEntrega: Boolean
    }
);

module.exports = model('pedidos', PedidoSchema);