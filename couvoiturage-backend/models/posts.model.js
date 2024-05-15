const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postPicture: { type: String, required: true },
    options: [String],
    adressePart: String,
    adresseArrive: String,
    prix: String,
    numplace: Number,
    date: String,
    time: String,
    phone: String,
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    appliedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", postSchema);
