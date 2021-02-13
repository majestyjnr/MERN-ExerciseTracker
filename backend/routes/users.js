const express = require('express')
const router = express.Router()

// Require Models
const Users = require('../models/Users')

router.get('/', function(req, res) {
    Users.find().then(users => res.json(users)).catch(err => res.status(400).json('Error: ' + err))
    // res.send('<h1> This is the Homepage </h1>')
})

module.exports = router
