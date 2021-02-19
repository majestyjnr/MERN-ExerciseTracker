const express = require('express')
const router = express.Router()

// Require Models
const Exercises = require('../models/Exercise')

router.get('/', function(req, res){
    Exercises.find().then(exercise => res.json(exercise)).catch(err => res.status(400).json('Error: ' + err))
})

router.post('/add-exercise', function(req, res){
    const newExercise = new Exercises({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.duration
    })

    newExercise.save().then(()=> res.json(`${req.body.username}'s Exercise has been successfully registered.`)).catch(err => res.status(400).json('Error: ' + err))
})



module.exports = router
