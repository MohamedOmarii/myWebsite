const router = require('express').Router()

const homeP = require('./home.js')

router.get('/', homeP)

module.exports = router
