const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('event.html'))
router.get('/category', (req, res) => res.render('event-category.html'))
router.get('/day', (req, res) => res.render('event-day.html'))

module.exports = router