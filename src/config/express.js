const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

const indexRouter = require('../routers/home')

nunjucks.configure('views', {
  autoescape: true,
  express: app
})

app.use(express.static('public'))

app.use('/', indexRouter)

module.exports = app