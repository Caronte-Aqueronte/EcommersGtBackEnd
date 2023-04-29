const Articulo = require('../models/Articulo');

/**
 * Muestra todos los articulos que esten publicados dentro de la app
 * @param {*} req 
 * @param {*} res 
 */
const mostrarArticulos = async (req, res) => {
    const articulos = await Articulo.find({ estadoPublicado: true });
    res.json(articulos);
}

/**
 * Muestra todos los articulos que no esten publicados
 * @param {*} req 
 * @param {*} res 
 */
const mostrarArticulosSinConfirmar = async (req, res) => {
    const articulos = await Articulo.find({ estadoPublicado: false });
    res.json(articulos);
}

/**
 * Busca los articulos de un usuario dentro de la bd
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const mostrarArticulosDeUsuario = async (req, res) => {
    const usuario = req.query.usuario;//recuperar el usuario al que le interesa saber sus articulos
    if (!usuario || usuario == "") {//el parametro existe
        res.json(null);
        return;
    }
    const articulos = await Articulo.find({ usuarioVendedor: usuario });
    res.json(articulos);
}

/**
 * Busca un articulo por el id envidado
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const buscarPorId = async (req, res) => {
    const id = req.query.id;//recuperar el usuario al que le interesa saber sus articulos
    if (!id || id == "") {//el parametro existe
        res.json(null);
        return;
    }
    const articulos = await Articulo.findOne({ _id: id });
    res.json(articulos);
}

/**
 * Busca los articulos publicados pertenecientes a una categoria
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const buscarPorCategoria = async (req, res) => {
    const categoria = req.query.categoria;//recuperar el usuario al que le interesa saber sus articulos
    if (!categoria || categoria == "") {//el parametro existe
        res.json(null);
        return;
    }
    const articulos = await Articulo.find({ categoria: categoria, estadoPublicado:true });
    res.json(articulos);
}


/**
 * Crea un articulo en la base datos a partir del body y el file del body
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const crearArticulo = async (req, res) => {
    const { body, file } = req;
    
    const precioFormat = ((Number)(body.precio)).toFixed(2);
    //validar si hay body y un file
    if (file && body) {
        //crear un nuevo Articulo a partir del body
        const newArticulo = new Articulo({
            usuarioVendedor: body.usuarioVendedor,
            nombre: body.nombre,
            descripcion: body.descripcion,
            imagen: {
                nombreArchivo: file.filename,
                archivoUrl: `http://localhost:3000/${file.filename}`
            },
            precio: precioFormat,
            categoria: body.categoria,

        });

        //mandamos a guardar el nuevo Articulo
        const insert = await newArticulo.save();

        if (!insert) {//si no se ingreso nada entonces devolvemos false
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

/**
 * Edita la informacion de un articulo a partir de su id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const editarInfoDeArticulo = async (req, res) => {
    const { body } = req;
    //validar si hay body y un file
    if (body) {
        const id = body.id;//extraer el id
        const nuevoNombre = body.nombre;
        const nuevaDescripcion = body.descripcion;
        const nuevoPrecio = body.precio;
        const nuevaCategoria = body.categoria;

        const update = await Articulo.findByIdAndUpdate({ _id: id },
            {
              
                    nombre: nuevoNombre,
                    descripcion: nuevaDescripcion,
                    precio: nuevoPrecio,
                    categoria: nuevaCategoria
                
            }
        );

        if (!update) {//si no se ingreso nada entonces devolvemos false
            res.json({
                actualizacion: false
            });
            return;
        }
        res.json({
            actualizacion: true
        });
        return;
    }
}

/**
 * Edita la imagen de un articulo a partir de su id
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const editarImagenDeArticulo = async (req, res) => {
    const { body, file } = req;
    //validar si hay body y un file
    if (file && body) {
        const id = body.id;//extraer el id
        const nombreImagen = file.filename;//extraemos el nombre de la imagen 
        const url = `http://localhost:3000/${file.filename}`;//creamos la url
        const date = Date.now();//creamos una nueva fecha 


        //mandamos a guardar el nuevo Articulo
        const update = await Articulo.findByIdAndUpdate({ _id: id },
            {
                $set: {
                    "imagen.nombreArchivo": nombreImagen,
                    "imagen.archivoUrl": url,
                    "imagen.fechaSubida": date
                }
            }
        );

        if (!update) {//si no se ingreso nada entonces devolvemos false
            res.json({
                actualizacion: false
            });
            return;
        }
        res.json({
            actualizacion: true
        });
        return;
    }
}

const publicarArticulo = async (req, res) =>{
    const id = req.body.id;

    if(id == null || id == ""){
        res.send(null);
        return;
    }

    const update = await Articulo.findByIdAndUpdate({ _id: id },
        {
            $set: {
                estadoPublicado: true
            }
        }
    );

    if(update){
        res.json({respuesta: true});
    }else{
        res.json({respuesta: false});
    }
}


module.exports = {
    mostrarArticulos: mostrarArticulos,
    crearArticulo: crearArticulo,
    mostrarArticulosDeUsuario: mostrarArticulosDeUsuario,
    buscarPorId: buscarPorId,
    editarImagenDeArticulo: editarImagenDeArticulo,
    editarInfoDeArticulo: editarInfoDeArticulo,
    mostrarArticulosSinConfirmar: mostrarArticulosSinConfirmar,
    buscarPorCategoria:buscarPorCategoria,
    publicarArticulo:publicarArticulo
}