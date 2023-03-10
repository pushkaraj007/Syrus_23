const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email ID"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  contact: {
    type: Number,
    required: [true, "Please provide a contact number"],
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courses",
    required: false
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
