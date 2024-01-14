const express = require('express');
const appInit = express();
const path = require('path');
const routes = require('./routes.js')

appInit.use(express.static(path.join(__dirname, 'front')));

routes.forEach((route) => {
  appInit[route.httpMethod](`${route.name}`,
    (req, res) => res.sendFile(path.join(__dirname, route.route)
  ));
});


appInit.listen(8080, () => {
  console.log('Server is running on port 8080');
});

