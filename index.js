const express = require('express');
const appInit = express();
const path = require('path');
let routes = require('./routes.js')

appInit.use(express.static(path.join(__dirname, 'front')));

appInit.get('/:section', (req, res) => {
  const sectionName = req.params.section;
  const filePath = routes(sectionName);

  if (filePath) {
    res.sendFile(path.join(__dirname, filePath));
  } else {
    res.status(404).send('Not Found');
  }
});

appInit.get('pito', (req, res) => {
  res.send(JSON)
} )

appInit.get('/', (req, res) => res.sendFile(path.join(__dirname, routes('index'))));

appInit.listen(8080, () => {
  console.log('Server is running on port 8080');
});