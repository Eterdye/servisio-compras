const routes = [
  { httpMethod: 'get', name: '/', route: 'front/public/index.html'},
  { httpMethod: 'get', name: '/detalles', route: 'front/public/index.html'},
  { httpMethod: 'get', name: '/inicio', route: 'front/public/index.html'},
  { httpMethod: 'get', name: '/pedidos', route: 'front/public/index.html'},

  { httpMethod: 'post', name: '/detalles', route: 'front/public/detalles.html'},
  { httpMethod: 'post', name: '/inicio', route: 'front/public/inicio.html'},
  { httpMethod: 'post', name: '/pedidos', route: 'front/public/pedidos.html'},
]

module.exports = routes
