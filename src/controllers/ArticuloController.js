const Articulo = require('../models/Articulo');



const mostrarArticulos = async (req, res) => {
   const articulos = await Articulo.find();
   res.json(articulos);
}

const crearArticulo = async (req, res) => {
   const {body, file} = req;
   //validar si hay body y un file
   if(file && body){
        //crear un nuevo Articulo a partir del body
        const newArticulo = new Articulo({
            usuarioVendedor: body.usuarioVendedor,
            nombre: body.nombre,
            descripcion: body.descripcion,
            imagen: {
                nombreArchivo: file.filename,
                archivoUrl: `http://localhost:8080/${file.filename}`
            },
            precio: body.precio,
            categoria:body.categoria,

        });

        //mandamos a guardar el nuevo Articulo
        const insert = await newArticulo.save();

        if(!insert){//si no se ingreso nada entonces devolvemos false
            res.json({
                ingreso: false
            });
            return;
        }
        res.json({
            ingreso: true
        });
        return;
   }
}

module.exports = {
    mostrarArticulos: mostrarArticulos,
    crearArticulo:crearArticulo
}