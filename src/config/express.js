const express = require('express')
const app = express()

const indexRouter = require('../routers/home')

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use('/', indexRouter)

module.exports = app