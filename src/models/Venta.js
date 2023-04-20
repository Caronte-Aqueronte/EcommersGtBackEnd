const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const model = mongoose.model;

const VentaSchema = new Schema(

    {
        pedido: String,
        fechaEntrega: Date
    }
);

module.exports = model('ventas', VentaSchema);