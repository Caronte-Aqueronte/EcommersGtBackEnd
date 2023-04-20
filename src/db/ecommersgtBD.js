use ecommersgt

db.createCollection("usuarios")
db.createCollection("articulos")
db.createCollection("carritos")
db.createCollection("pedidos")
db.createCollection("ventas")

db.usuarios.createIndex({ correoElectronico: 1 }, { unique: true });//creando un index para la coleccion usuarios

//insercion de usuarios comunes
db.usuarios.insert(
    [
        {
            correoElectronico: "comun1@comun",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Comun",
        }
    ]
)
db.usuarios.insert(
    [
        {
            correoElectronico: "comun2@comun",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Comun",
        }
    ]
)

db.usuarios.insert(
    [
        {
            correoElectronico: "comun3@comun",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Comun",
        }
    ]
)

db.usuarios.insert(
    [
        {
            correoElectronico: "comun4@comun",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Comun",
        }
    ]
)

db.usuarios.insert(
    [
        {
            correoElectronico: "comun5@comun",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Comun",
        }
    ]
)

//insercion de usuarios para paqueteria
db.usuarios.insert(
    [
        {
            correoElectronico: "paqueteria1@paqueteria",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Paqueteria",
        }
    ]
)

db.usuarios.insert(
    [
        {
            correoElectronico: "paqueteria2@paqueteria",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Paqueteria",
        }
    ]
)
//insercion de usuarios administrativos
db.usuarios.insert(
    [
        {
            correoElectronico: "admin1@admin",
            password: "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3",
            rol: "Administrador",
        }
    ]
)
/*******  INSERCION DE ARTICULOS ************/

//ARTICULOS DEL PRIMER USUARIO
db.articulos.insert(
    [
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Pelota Wonder',
            descripcion: 'Pelota marca Wonder para Baseball, cuero, blanca',
            imagen: {
                nombreArchivo: 'file - 1682025065762.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682025065762.jpeg',
                fechaSubida: '1682024919692'
            },
            precio: 99.99,
            categoria: 'Otros',
            estadoPublicado: true
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Bat Willson',
            descripcion: 'Bat para Baseball, marca Willson, color negro',
            imagen: {
                nombreArchivo: 'file - 1682025491831.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682025491831.jpeg',
                fechaSubida: '1682025265676'
            },
            precio: 199.99,
            categoria: 'Otros',
            estadoPublicado: true
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Control Xbox',
            descripcion: 'Control Xbox, Color rojo',
            imagen: {
                nombreArchivo: 'file - 1682026035076.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682026035076.jpeg',
                fechaSubida: '1682025993921'
            },
            precio: 300,
            categoria: 'Tecnología',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Iphone 12 pro max',
            descripcion: 'Iphone 12 pro max, color azul',
            imagen: {
                nombreArchivo: 'file - 1682026157029.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682026157029.jpeg',
                fechaSubida: '1682025993921'
            },
            precio: 3000,
            categoria: 'Tecnología',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Lavadora Wirlpool',
            descripcion: 'Lavadora Wirlpool automatica, color blanco',
            imagen: {
                nombreArchivo: 'file - 1682026254156.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682026254156.jpeg',
                fechaSubida: '1682025993921'
            },
            precio: 10000,
            categoria: 'Hogar',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Samsung S22',
            descripcion: 'Samsung S22 color rosado',
            imagen: {
                nombreArchivo: 'file - 1682026283053.png',
                archivoUrl: 'http://localhost:8080/file - 1682026283053.png',
                fechaSubida: '1682025993921'
            },
            precio: 4000,
            categoria: 'Tecnología',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Nintendo Switch',
            descripcion: 'Nintendo Switch, Lite, Color rosado',
            imagen: {
                nombreArchivo: 'file - 1682026318420.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682026318420.jpeg',
                fechaSubida: '1682025993921'
            },
            precio: 4000,
            categoria: 'Tecnología',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Tarjeta Xbox Game Pass',
            descripcion: 'Tarjeta Xbox Game Pass, por un mes',
            imagen: {
                nombreArchivo: 'file - 1682026351822.png',
                archivoUrl: 'http://localhost:8080/file - 1682026351822.png',
                fechaSubida: '1682025993921'
            },
            precio: 50,
            categoria: 'Tecnología',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Play Station 5',
            descripcion: 'Play Station 5, Discos fisicos, 1000GB',
            imagen: {
                nombreArchivo: 'file - 1682026456813.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682026456813.jpeg',
                fechaSubida: '1682025993921'
            },
            precio: 7000,
            categoria: 'Tecnología',
            estadoPublicado: true,
        },
        {
            usuarioVendedor: 'comun1@comun',
            nombre: 'Control para play 5',
            descripcion: 'Control para play 5, color negro, 1ra generacion',
            imagen: {
                nombreArchivo: 'file - 1682026541661.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682026541661.jpeg',
                fechaSubida: '1682025993921'
            },
            precio: 500,
            categoria: 'Tecnología',
            estadoPublicado: true,
        }
    ]
)

//ARTICULOS SEGUNDO USUARIO
db.articulos.insert([
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Cafetera Black&Decker',
        descripcion: 'Cafetera Black&Decker, Color negro',
        imagen: {
            nombreArchivo: 'file - 1682027265302.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682027265302.jpeg',
            fechaSubida: '1682026680477'
        },
        precio: 500,
        categoria: 'Hogar',
        estadoPublicado: true,
    },
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Refrigeradora Oster',
        descripcion: 'Refrigeradora Oster, Color gris',
        imagen: {
            nombreArchivo: 'file - 1682028132832.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682028132832.jpeg',
            fechaSubida: '1682026680477'
        },
        precio: 6000,
        categoria: 'Hogar',
        estadoPublicado: true
    },
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Armario DELUXE',
        descripcion: 'Armario DELUXE, dos puertas, madera',
        imagen: {
            nombreArchivo: 'file - 1682028229222.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682028229222.jpeg',
            fechaSubida: '1682028155130'
        },
        precio: 1000,
        categoria: 'Hogar',
        estadoPublicado: true
    },
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Sillon Zen',
        descripcion: 'Sillon Zen, color gris',
        imagen: {
            nombreArchivo: 'file - 1682028323054.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682028323054.jpeg',
            fechaSubida: '1682028251214'
        },
        precio: 600,
        categoria: 'Hogar',
        estadoPublicado: true
    },
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Silla Giratoria',
        descripcion: 'Silla Giratoria, empresarial',
        imagen: {
            nombreArchivo: 'file - 1682028488574.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682028488574.jpeg',
            fechaSubida: '1682028406237'
        },
        precio: 300,
        categoria: 'Hogar',
        estadoPublicado: true
    },
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Florero',
        descripcion: 'Florero de vidrio tipo gota',
        imagen: {
            nombreArchivo: 'file - 1682028704118.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682028704118.jpeg',
            fechaSubida: '1682028406237'
        },
        precio: 100,
        categoria: 'Decoración',
        estadoPublicado: true
    },
    {
        usuarioVendedor: 'comun2@comun',
        nombre: 'Vaso de vidrio',
        descripcion: 'Vaso de vidrio, 250 ml',
        imagen: {
            nombreArchivo: 'file - 1682029023910.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682029023910.jpeg',
            fechaSubida: '1682028742475'
        },
        precio: 25,
        categoria: 'Hogar',
        estadoPublicado: true
    },
    {
        _id: ObjectId("6441bc06c244f036a3754d7a"),
        usuarioVendedor: 'comun2@comun',
        nombre: 'Copa de vino',
        descripcion: 'Copa de vino, 250 ml',
        imagen: {
            nombreArchivo: 'file - 1682029574518.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682029574518.jpeg',
            fechaSubida: '1682029318918'
        },
        precio: 20,
        categoria: 'Hogar',
        estadoPublicado: true,
        __v: 0
    },
    {
        _id: ObjectId("6441bd1287908b8d1efc8527"),
        usuarioVendedor: 'comun2@comun',
        nombre: 'Pichel',
        descripcion: 'Pichel 2lts, color rojo',
        imagen: {
            nombreArchivo: 'file - 1682029842510.png',
            archivoUrl: 'http://localhost:8080/file - 1682029842510.png',
            fechaSubida: '1682029786472'
        },
        precio: 5,
        categoria: 'Hogar',
        estadoPublicado: true,
        __v: 0
    },
    {
        _id: ObjectId("6441bd5687908b8d1efc8529"),
        usuarioVendedor: 'comun2@comun',
        nombre: 'Tazón',
        descripcion: 'Tazón de acero inoxidable',
        imagen: {
            nombreArchivo: 'file - 1682029910574.png',
            archivoUrl: 'http://localhost:8080/file - 1682029910574.png',
            fechaSubida: '1682029786472'
        },
        precio: 128,
        categoria: 'Hogar',
        estadoPublicado: true,
        __v: 0
    }
])

//ARTICULOS DEL TERCER USUARIO
db.articulos.insert(
    [
        {
            _id: ObjectId("6441be086c42b11680abb63b"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Lapiz Vplus',
            descripcion: 'Lapiz Vplus de grafito',
            imagen: {
                nombreArchivo: 'file - 1682030088357.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030088357.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 5,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441be226c42b11680abb63d"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Borrador Mapped',
            descripcion: 'Borrador Mapped',
            imagen: {
                nombreArchivo: 'file - 1682030114326.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030114326.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 5,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441be4c6c42b11680abb63f"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Crayones Mapped',
            descripcion: 'Crayones Mapped, 24 colores',
            imagen: {
                nombreArchivo: 'file - 1682030156477.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030156477.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 60,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441be7a6c42b11680abb641"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Rapidorgrafo',
            descripcion: 'Rapidorgrafo 0.1',
            imagen: {
                nombreArchivo: 'file - 1682030202485.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030202485.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 20,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441bec16c42b11680abb643"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Juego de geometría Mapped',
            descripcion: '2 escuadras, 1 transportador, 1 compas',
            imagen: {
                nombreArchivo: 'file - 1682030273846.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030273846.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 50,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441beee6c42b11680abb645"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Mochila Movu',
            descripcion: 'Mochila Movu color azul',
            imagen: {
                nombreArchivo: 'file - 1682030318668.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030318668.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 500,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441bf6c6c42b11680abb647"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Cartuchera',
            descripcion: 'Cartuchera rosada, 1 compartimiento',
            imagen: {
                nombreArchivo: 'file - 1682030444453.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030444453.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 50,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441bfb86c42b11680abb649"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Cuaderno Arimany',
            descripcion: 'Cuaderno Arimany, amarillo, 250 paginas',
            imagen: {
                nombreArchivo: 'file - 1682030520604.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030520604.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 30,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441bff96c42b11680abb64b"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Lonchera',
            descripcion: 'Lonchera Among Us, un compartimiento',
            imagen: {
                nombreArchivo: 'file - 1682030585918.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030585918.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 200,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441c0736c42b11680abb64d"),
            usuarioVendedor: 'comun3@comun',
            nombre: 'Folder Kikomo',
            descripcion: 'Folder Kikomo expandible',
            imagen: {
                nombreArchivo: 'file - 1682030707134.jpeg',
                archivoUrl: 'http://localhost:8080/file - 1682030707134.jpeg',
                fechaSubida: '1682029947929'
            },
            precio: 25,
            categoria: 'Académico',
            estadoPublicado: true,
            __v: 0
        }
    ]
)

// PRODUCTOS DEL CUARTO USUARIO

db.articulos.insert(
    [
        {
            _id: ObjectId("6441c2cd66c5ee2e6193fc8d"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Libro el buen cirujano',
            descripcion: 'Libro el buen cirujano pasta dura',
            imagen: {
                nombreArchivo: 'file - 1682031309866.webp',
                archivoUrl: 'http://localhost:8080/file - 1682031309866.webp',
                fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
        },
        {
            _id: ObjectId("6441c33b66c5ee2e6193fc8f"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Libro: Camino A La Miseria',
            descripcion: 'Por Lauren Grant',
            imagen: {
              nombreArchivo: 'file - 1682031419339.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031419339.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c36766c5ee2e6193fc91"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Libro: La Naranja Mecanica',
            descripcion: 'Por Anthony Burguess',
            imagen: {
              nombreArchivo: 'file - 1682031463420.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031463420.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c39766c5ee2e6193fc93"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Libro: El Color Perdido del Bosque',
            descripcion: 'Por Joe Chamber',
            imagen: {
              nombreArchivo: 'file - 1682031511661.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031511661.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c3cd66c5ee2e6193fc95"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Libro: Los Hombres Del Norte',
            descripcion: 'Por John Haywood',
            imagen: {
              nombreArchivo: 'file - 1682031565237.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031565237.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c40566c5ee2e6193fc97"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Atlantis: Proyecto Tarsis',
            descripcion: 'Por: Jose Enrique Exposito',
            imagen: {
              nombreArchivo: 'file - 1682031621702.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031621702.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c47c66c5ee2e6193fc99"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Matar a un Ruiseñor',
            descripcion: 'Por: Haper Lee',
            imagen: {
              nombreArchivo: 'file - 1682031740070.webp',
              archivoUrl: 'http://localhost:8080/file - 1682031740070.webp',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c4f166c5ee2e6193fc9b"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'El Varon Rampante',
            descripcion: 'Por Italo Calvino',
            imagen: {
              nombreArchivo: 'file - 1682031857589.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031857589.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c52b66c5ee2e6193fc9d"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'La Historia de Rondha',
            descripcion: 'Por Carmen González',
            imagen: {
              nombreArchivo: 'file - 1682031915692.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682031915692.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          },
          {
            _id: ObjectId("6441c6a566c5ee2e6193fc9f"),
            usuarioVendedor: 'comun4@comun',
            nombre: 'Red Queen',
            descripcion: 'Por Victoria Aveyard',
            imagen: {
              nombreArchivo: 'file - 1682032293374.jpeg',
              archivoUrl: 'http://localhost:8080/file - 1682032293374.jpeg',
              fechaSubida: '1682031108563'
            },
            precio: 200,
            categoria: 'Literatura',
            estadoPublicado: true,
            __v: 0
          }
    ]
)

//PRODUCTOS DEL USUARIO 5

db.articulos.insert(
    [
        {
          _id: ObjectId("6441c8a166c5ee2e6193fca2"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Camisa Ciman',
          descripcion: 'Color Aqua',
          imagen: {
            nombreArchivo: 'file - 1682032801391.webp',
            archivoUrl: 'http://localhost:8080/file - 1682032801391.webp',
            fechaSubida: '1682031108563'
          },
          precio: 200,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c8c866c5ee2e6193fca4"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Camisa a cuadros CAT',
          descripcion: 'Camisa a cuadros CAT, rojo y gris',
          imagen: {
            nombreArchivo: 'file - 1682032840621.webp',
            archivoUrl: 'http://localhost:8080/file - 1682032840621.webp',
            fechaSubida: '1682031108563'
          },
          precio: 300,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c8e066c5ee2e6193fca6"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Camisa SIman Negra',
          descripcion: 'Camisa SIman Negra',
          imagen: {
            nombreArchivo: 'file - 1682032864717.webp',
            archivoUrl: 'http://localhost:8080/file - 1682032864717.webp',
            fechaSubida: '1682031108563'
          },
          precio: 300,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c90b66c5ee2e6193fca8"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Pantalon Texora',
          descripcion: 'Pantalon Texora color cafe',
          imagen: {
            nombreArchivo: 'file - 1682032907108.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682032907108.jpeg',
            fechaSubida: '1682031108563'
          },
          precio: 200,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c92b66c5ee2e6193fcaa"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Pantalon Progresiva',
          descripcion: 'Pantalon Progresiva, lona zul',
          imagen: {
            nombreArchivo: 'file - 1682032939312.webp',
            archivoUrl: 'http://localhost:8080/file - 1682032939312.webp',
            fechaSubida: '1682031108563'
          },
          precio: 300,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c99666c5ee2e6193fcac"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Pantalon Outdoor',
          descripcion: 'Pantalon Outdoor para hombre color gris',
          imagen: {
            nombreArchivo: 'file - 1682033046149.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682033046149.jpeg',
            fechaSubida: '1682031108563'
          },
          precio: 200,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c9bb66c5ee2e6193fcae"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Gorra BMW',
          descripcion: 'Gorra BMW color negro Marca Puma',
          imagen: {
            nombreArchivo: 'file - 1682033083956.jpeg',
            archivoUrl: 'http://localhost:8080/file - 1682033083956.jpeg',
            fechaSubida: '1682031108563'
          },
          precio: 100,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441c9fa66c5ee2e6193fcb0"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Gorra LA',
          descripcion: 'Gorra LA color azul',
          imagen: {
            nombreArchivo: 'file - 1682033146428.webp',
            archivoUrl: 'http://localhost:8080/file - 1682033146428.webp',
            fechaSubida: '1682031108563'
          },
          precio: 200,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441ca2466c5ee2e6193fcb2"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Lentes Ray Ban',
          descripcion: 'Lentes Ray Ban, polarizado negro',
          imagen: {
            nombreArchivo: 'file - 1682033188428.webp',
            archivoUrl: 'http://localhost:8080/file - 1682033188428.webp',
            fechaSubida: '1682031108563'
          },
          precio: 200,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        },
        {
          _id: ObjectId("6441ca5a66c5ee2e6193fcb4"),
          usuarioVendedor: 'comun5@comun',
          nombre: 'Botas CAT',
          descripcion: 'Botas CAT, para trabajo, color cafe',
          imagen: {
            nombreArchivo: 'file - 1682033242286.webp',
            archivoUrl: 'http://localhost:8080/file - 1682033242286.webp',
            fechaSubida: '1682031108563'
          },
          precio: 400,
          categoria: 'Otros',
          estadoPublicado: true,
          __v: 0
        }
      ]
)