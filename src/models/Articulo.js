const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const model = mongoose.model;

const ArticuloSchema = new Schema(

    {
        usuarioVendedor: String,

        nombre: String,

        descripcion: String,

        imagen: {
            nombreArchivo: String,//nombre del archivo
            archivoUrl: String,//la ruta donde se aloja la imagen
            fechaSubida: { type: String, default: Date.now()},//fecha de subida de la imagen
        }, //base 64 de las imagenes

        precio: Number,

        categoria: String,

        estadoPublicado: { type: Boolean, default: false }


    }
);

module.exports = model('articulos', ArticuloSchema);