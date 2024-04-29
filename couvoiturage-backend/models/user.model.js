const mongoose = require("mongoose");

const uerSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  profilePicture: { type: String, default: "/assets/DefaultUser.png" },
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  picture: String,
  birthdate: Date,
});
module.exports = mongoose.model("users", uerSchema);
