const express = require('express')
const rotas = express.Router()
const { pesquisarFilmes } = require('./controladores/filmes')


rotas.get('/pesquisarfilme', pesquisarFilmes)



module.exports = rotas