const Tarjeta = require('../models/Tarjeta');


const guardarTarjeta = async (req, res) => {
    const usuario = req.body.usuario;
    const numTarjeta = req.body.tarjeta.numTarjeta;
    const cvc = req.body.tarjeta.cvc;
    const vencimiento = req.body.tarjeta.vencimiento;

    if (!usuario || !numTarjeta || !cvc || !vencimiento) {
        res.json({ respuesta: false });
        return;
    }

    const nuevaTarjeta = new Tarjeta(
        {
            usuario: usuario,
            cvc: cvc,
            numero: numTarjeta,
            fecha: vencimiento
        }
    );

    const tarjetaInsertada = await nuevaTarjeta.save();

    if (tarjetaInsertada) {
        res.json({ respuesta: true });
    } else {
        res.json({ respuesta: false });
    }
}


const mostrarTarjetasDeUsuario = async (req, res) => {
    const usuario = req.query.usuario;//recuperar el usuario al que le interesa saber sus articulos
    if (!usuario || usuario == "") {//el parametro existe
        res.json(null);
        return;
    }
    const tarjetas = await Tarjeta.find({ usuario: usuario });
    res.json(tarjetas);
}

module.exports = {
    guardarTarjeta: guardarTarjeta,
    mostrarTarjetasDeUsuario: mostrarTarjetasDeUsuario
}