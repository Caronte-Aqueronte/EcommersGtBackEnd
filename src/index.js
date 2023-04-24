const express = require('express');//iniciar express
const mongoose = require('mongoose');//iniciar mongoose
const usuarioRoutes = require('./routes/usuario.routes');
const articuloRoutes = require('./routes/articulo.routes');
const carritoRoutes = require('./routes/carrito.routes');
const tarjetaRoutes = require('./routes/tarjeta.routes');
const pedidoRoutes = require('./routes/pedido.routes');
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');


const app = express();//igualar una constante a expresss
const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
//lectura de json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//cors
app.use(cors(corsOptions));

//achivos estaticos 
app.use(express.static(path.join(__dirname, './upload')));


async function start() {
    try {
        const db = await mongoose.connect('mongodb://localhost:27017/ecommersgt', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });//establec una conexion con la base de datos en mongodb

        console.log("Nos conectamos", db.connection.name);//mensaje de confirmacion
    } catch (error) {
        console.log("Nos nos conectamos");//mensaje de error
    }
}

start();//llamamos la funcion

app.use('/usuario', usuarioRoutes);//las rutas para los usuarios seran leidas desde localost/usuario/
app.use('/articulo', articuloRoutes);//las rutas para los usuarios seran leidas desde localost/articulo/
app.use('/carrito', carritoRoutes); //las rutas para los usuarios seran leidas desde localost/carrito/
app.use('/tarjeta', tarjetaRoutes);//las rutas para los usuarios seran leidas desde localost/tarjeta/
app.use('/pedido', pedidoRoutes);//las rutas para los usuarios seran leidas desde localost/tarjeta/
app.listen(3000);//exuchando por el pueto 3000

