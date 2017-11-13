const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const homeRouter = require('../routers/home')
const perfilRouter = require('../routers/perfil')

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

app.use('/', homeRouter)
app.use('/perfil', perfilRouter)

module.exports = app