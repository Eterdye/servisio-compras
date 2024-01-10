function routes(rut){
    let rutas = {
        contacto: 'front/public/contacto.html',
        detalles: 'front/public/detalles.html',
        index: 'front/public/index.html',
        inicio: 'front/public/inicio.html',
        pedidos: 'front/public/pedidos.html',
    }

    return rutas[rut]

 }

 module.exports = routes