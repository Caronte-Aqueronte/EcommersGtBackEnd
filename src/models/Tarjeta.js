const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const model = mongoose.model;

const PedidoSchema = new Schema(

    {
        usuario:String,//usuario propietario
        cvc:String,//codigo de seguridad
        numero:String,//numero
        fecha:String//fecha de vencimiento
    }
);

module.exports = model('tarjetas', PedidoSchema);