require('dotenv').config()
const express = require('express')
const rotas = require('./rotas')

const app = express()

app.use(express.json())
app.use(rotas)

//Teste da conexão SSH git
//Novo teste


app.listen(process.env.PORT, ()=>{
    console.log(`O servidor iniciou na porta ${process.env.PORT}`)
})