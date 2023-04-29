const Articulo = require('../models/Articulo');

const Pedido = require('../models/Pedido');


const diezProductosMasVendidos = async (req, res) => {
    const fecha1 = req.query.fecha1;//extraemos las fechas del intervalo
    const fecha2 = req.query.fecha2;//extraemos las fechas del intervalo
    if (!fecha1 || fecha1 == "" || !fecha2 || fecha2 == "") {//si los parametros estan vacios o nulos devolvemos null
        res.send(null);
        return;
    }

    const diezMasVendidos = await Pedido.aggregate([
        { $match: { fechaDeLaVenta: { $gte: fecha1, $lte: fecha2 } } },//filtra por fechas de compra
        {$unwind: "$articulos" }, //desenvuelve todos los arrays de articulos de los pedidos que coincidan en fechas
        { $group: { _id: "$articulos._id", numVentas: { $sum: 1 }, usuarioVendedor: { $first: "$articulos.usuarioVendedor" }, nombre: { $first: "$articulos.nombre" }/*devuelve la informacion del primer elemento de group*/}},
        { $sort: { numVentas: -1 } },
        { $limit: 10 }
    ])

    res.json(diezMasVendidos);
}

const cincoClientesQueMasGananciaGeneran = async (req, res) => {
    const fecha1 = req.query.fecha1;//extraemos las fechas del intervalo
    const fecha2 = req.query.fecha2;//extraemos las fechas del intervalo
    if (!fecha1 || fecha1 == "" || !fecha2 || fecha2 == "") {//si los parametros estan vacios o nulos devolvemos null
        res.send(null);
        return;
    }

    const cincoMasGanancia = await Pedido.aggregate(
        [ 
         { $match: { fechaDeLaVenta: { $gte: fecha1, $lte: fecha2 } } }, /*filtra por fechas de compra*/
         { $group: { _id: "$usuarioComprador",  ganancia: { $sum: "$ganancia" } /*devuelve la informacion del primer elemento de group*/ } }, 
         { $sort: { ganancia: -1 } }, { $limit: 5 }
        ]
    )

    res.json(cincoMasGanancia);
}


const cincoClientesQueMasVentasTienen = async (req, res) => {
    const fecha1 = req.query.fecha1;//extraemos las fechas del intervalo
    const fecha2 = req.query.fecha2;//extraemos las fechas del intervalo
    if (!fecha1 || fecha1 == "" || !fecha2 || fecha2 == "") {//si los parametros estan vacios o nulos devolvemos null
        res.send(null);
        return;
    }

    const cincoMasVentas= await Pedido.aggregate(
        [ 
            { $match: { fechaDeLaVenta: { $gte: fecha1, $lte: fecha2 } } },//filtra por fechas de compra
            {$unwind: "$articulos" }, //desenvuelve todos los arrays de articulos de los pedidos que coincidan en fechas
            { $group: { _id: "$articulos.usuarioVendedor", numVentas: { $sum: 1 }/*devuelve la informacion del primer elemento de group*/}},
            { $sort: { numVentas: -1 } },
            { $limit: 5 }
        ]
    )

    res.json(cincoMasVentas);
}

const diezClientesQueMasPedidosGeneran = async (req, res) => {
    const fecha1 = req.query.fecha1;//extraemos las fechas del intervalo
    const fecha2 = req.query.fecha2;//extraemos las fechas del intervalo
    if (!fecha1 || fecha1 == "" || !fecha2 || fecha2 == "") {//si los parametros estan vacios o nulos devolvemos null
        res.send(null);
        return;
    }

    const diezClientesQueMasPedidosGeneran = await Pedido.aggregate(
        [ 
         { $match: { fechaDeLaVenta: { $gte: fecha1, $lte: fecha2 } } }, /*filtra por fechas de compra*/
         { $group: { _id: "$usuarioComprador",  numPedidos: { $sum: 1 } /*devuelve la informacion del primer elemento de group*/ } }, 
         { $sort: { numPedidos: -1 } }, { $limit: 10 }
        ]
    )

    res.json(diezClientesQueMasPedidosGeneran);
}

const diezClientesConMasProductos = async (req, res) => {
    const cincoMasGadiezClientesConMasProductosnancia = await Articulo.aggregate(
        [ 
         { $group: { _id: "$usuarioVendedor",  numArticulos: { $sum: 1 } /*devuelve la informacion del primer elemento de group*/ } }, 
         { $sort: { numArticulos: -1 } }, { $limit: 10 }
        ]
    )

    res.json(cincoMasGadiezClientesConMasProductosnancia);
}


module.exports = {
    diezProductosMasVendidos:diezProductosMasVendidos,
    cincoClientesQueMasGananciaGeneran:cincoClientesQueMasGananciaGeneran,
    cincoClientesQueMasVentasTienen:cincoClientesQueMasVentasTienen,
    diezClientesQueMasPedidosGeneran:diezClientesQueMasPedidosGeneran,
    diezClientesConMasProductos:diezClientesConMasProductos
}


//db.pedidos.aggregate([
  //  { $match: { fechaDeLaVenta: { $gte: "2023-04-23", $lte: "2023-04-23" } } },//filtra por fechas de compra
    //{$unwind: "$articulos" }, //desenvuelve todos los arrays de articulos de los pedidos que coincidan en fechas
    //{ $group: { _id: "$articulos._id", numVentas: { $sum: 1 }, articulo: { $first: "$articulos" } /*devuelve la informacion del primer elemento de group*/}},
    //{ $sort: { numVentas: -1 } },
    //{ $limit: 10 }
//])


//db.pedidos.aggregate(
  //    [ 
    // { $match: { fechaDeLaVenta: { $gte: "2023-04-25", $lte: "2023-04-28" } } }, /*filtra por fechas de compra*/
    // { $group: { _id: "$usuarioComprador",  ganancia: { $sum: "$ganancia" } /*devuelve la informacion del primer elemento de group*/ } }, 
     //{ $sort: { ganancia: -1 } }, { $limit: 5 }
    //]
//)