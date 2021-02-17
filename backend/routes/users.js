const express = require("express");
const router = express.Router();

// Require Models
const Users = require("../models/Users");

router.get("/users", function (req, res) {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add-user", function (req, res) {
  const username = req.body.username;

  const newUser = new Users({username});

  newUser.save().then(() => res.json('User Added!')).catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;
