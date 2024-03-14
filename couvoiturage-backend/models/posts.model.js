const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  description: String,
  datePart:String,
  dateArrive:String,
  prix:String,
numplace:String,
location:String,
phone:String,
  creator: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    required: true,
  },
});
module.exports = mongoose.model("posts", postSchema);
