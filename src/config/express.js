const nunjucks = require('nunjucks')
const express = require('express')
const app = express()

nunjucks.configure('view', {
  autoescape: true,
  express: app
})

app.use(express.static('./asset'))

app.get('/', (req, res) => res.render('index.html'))

module.exports = app
