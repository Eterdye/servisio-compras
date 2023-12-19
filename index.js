const express = require('express')
const appInit = express()
const path = require('path')


appInit.use(express.static(path.join(__dirname, 'front')))


let comentario_para_daniela= 'daniela mamalo'

appInit.get('/', (req,res) => res.sendFile(path.join(__dirname, 'front/public/index.html')))


appInit.get('/invento', (req,res) => {
    const body = {
        head: '0,0',
        body: '( _ )',
        feet: 'LL'
    }

    res.json(body)

} )


appInit.listen(8080)