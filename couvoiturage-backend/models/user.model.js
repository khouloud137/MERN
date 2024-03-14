const mongoose = require("mongoose");

const uerSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  bio: String,
  picture: String,
  birthdate: Date,
});
module.exports = mongoose.model("users", uerSchema);
