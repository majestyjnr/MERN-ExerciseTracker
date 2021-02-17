const express = require('express')
const router = express.Router()

// Require Models
const Exercises = require('../models/Exercise')

router.get('/', function(req, res){
    Exercises.find().then(exercise => res.json(exercise)).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
