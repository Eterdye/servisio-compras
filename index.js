const express = require('express')
const appInit = express()
const path = require('path')


appInit.use(express.static(path.join(__dirname, 'front')))

appInit.get('/', (req,res) => res.sendFile(path.join(__dirname, 'front/public/index.html')))

appInit.listen(8080)