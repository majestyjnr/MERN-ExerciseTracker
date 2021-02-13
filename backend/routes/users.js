const express = require('express')
const router = express.Router()


// Require Models



router.get('/', function(req, res) {
    res.send('<h1> This is the Homepage </h1>')
})

module.exports = router
