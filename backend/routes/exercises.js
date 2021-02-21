const express = require('express')
const router = express.Router()

// Require Models
const Exercises = require('../models/Exercise')

// Get Exercises Handler
router.get('/', function(req, res){
    Exercises.find().then(exercise => res.json(exercise)).catch(err => res.status(400).json('Error: ' + err))
})

// Delete Exercise Handler
router.get('/exercise/:id', function(req, res){
    Exercises.findByIdAndRemove(req.params.id, { useFindAndModify: false }).then(deletedExercise => res.json(deletedExercise)).catch(err => res.status(400).json('Error: ' + err))
})

// Add Excercise Handler
router.post('/add-exercise', function(req, res){
    const newExercise = new Exercises({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.duration
    })
    newExercise.save().then(()=> res.json(`${req.body.username}'s Exercise has been successfully registered.`)).catch(err => res.status(400).json('Error: ' + err))
})

// Get Exercise to be edited
router.get('/edit-exercise/:id', function(req, res){
    Exercises.findById(req.params.id).then(exercise => res.json(exercise)).catch(err => res.status(400).json('Error: ' + err))
})

// Edit Exercise Handler
router.post('/edit-exercise', function(req, res){
    const editedExercise = {
        $set: {
            username: req.body.username,
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.duration
        }
    }
    Exercises.updateOne({ _id: req.body._id }, editedExercise ).then(()=> res.json(`${req.body.username}'s Exercise has been successfully registered.`)).catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
