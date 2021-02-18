const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true
    },
  },
  { timestamps: true }
);

const Exercise = mongoose.model("exercise", userSchema);

module.exports = Exercise;
