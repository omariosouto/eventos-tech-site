const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const homeRouter = require('../routers/home')
const perfilRouter = require('../routers/perfil')
const eventRouter = require('../routers/event')

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

app.use('/', homeRouter)
app.use('/perfil', perfilRouter)
app.use('/event', eventRouter)

module.exports = app