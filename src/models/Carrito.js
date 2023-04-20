const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const Schema = mongoose.Schema;

const model = mongoose.model;

const CarritoSchema = new Schema(

    {
      articulos: Array,
      usuario: String
    }
);

module.exports = model('carritos', CarritoSchema);