const mongoose = require("mongoose");
const { schema } = require("./listingandreviews");

const Login_Signup = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AuthModel = mongoose.model("auth-data", Login_Signup);

module.exports = AuthModel;
