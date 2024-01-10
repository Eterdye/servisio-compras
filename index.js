const express = require('express');
const appInit = express();
const path = require('path');
let routes = require('./routes.js')

appInit.use(express.static(path.join(__dirname, 'front')));

appInit.get('', (req, res) => {

});

appInit.get('/', (req, res) => res.sendFile(path.join(__dirname, routes('index'))));

appInit.listen(8080, () => {
  console.log('Server is running on port 8080');
});