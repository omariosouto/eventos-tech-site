const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const homeRouter = require('../routers/home')

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

app.use('/', homeRouter)

module.exports = app