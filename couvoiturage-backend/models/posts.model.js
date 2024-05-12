const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    options:[String],
    adressePart: String,
    adresseArrive: String,
    prix: String,
    numplace: String,
    date: String,
    time:String,
    phone: String,

    creator: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
