const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    description: String,
    adressePart: String,
    adresseArrive: String,
    prix: String,
    numplace: String,
    date: String,
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
