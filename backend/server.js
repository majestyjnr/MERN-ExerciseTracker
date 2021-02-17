const express = require('express');
const mongoose = require("mongoose");
const app = express()


// Require the Db connection String
const db = require("./config/db_config").MongoURI;

// MongoDB Connection
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function () {
    console.log("MongoDb Connected");
  })
  .catch((err) => console.log(err));

// BodyParser || To GET data from form
app.use(express.urlencoded({ extended: false }));

// BodyParser || To GET data in json
app.use(express.json());

// Require routes
const users = require('./routes/users')
const exercises = require('./routes/exercises')

// System routes
app.use('/', users)
app.use('/', exercises)

const PORT =  process.env.PORT || 4000
app.listen(PORT, function(){
    console.log(`Server running on PORT: ${PORT}`);
})