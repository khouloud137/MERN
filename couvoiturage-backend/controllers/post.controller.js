const POST = require("../models/posts.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

exports.GetAllposts = async (req, res) => {

  try {
    const post = await POST.find().populate(
      "creator",
      "firstname lastname id profilePicture"
    );
    res.json({ status: "success", data: post });
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};

exports.AddPost = async (req, res) => {
  const postData = { ...req.body, creator: req.user.data.id };
  if (postData.options.length > 0) {
    postData.options = postData.options.split(",");
  }

  try {
    if (req.file) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          console.log(error);
        });

      if (uploadResult) {
        postData.postPicture = uploadResult.url;

        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
    }
    const post = await POST.create(postData);
    if (post) {
      res.json({ status: "success", message: "post added" });
    } else {
      res.json({ status: "fail", message: "post not added" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};

exports.DeletePost = async (req, res) => {
  const params = req.params;
  try {
    const post = await POST.findByIdAndDelete(params.id);

    if (post) {
      res.json({ status: "success", message: "post deleted" });
    } else {
      res.json({ status: "fail", message: "post was not deleted" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};

exports.UpdatePost = async (req, res) => {
  const {
    adressePart,
    adresseArrive,
    date,
    time,
    numplace,
    prix,
    phone,
    postId,
    options,
  } = req.body;
  const newData = {
    adressePart,
    adresseArrive,
    date,
    time,
    numplace,
    prix,
    phone,
    options,
  };

  if (newData.options.length > 0) {
    newData.options = newData.options.split(",");
  }

  try {
    if (req.file) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          console.log(error);
        });
      if (uploadResult) {
        newData.postPicture = uploadResult.url;

        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
    }

    const post = await POST.findByIdAndUpdate(postId, newData, { new: true });

    if (post) {
      res.json({ status: "success", message: "post updated" });
    } else {
      res.status(400).json({ status: "fail", message: "post was not updated" });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};
exports.GetUserposts = async (req, res) => {
  const userID = req.user.data.id;
  try {
    const post = await POST.find({ creator: userID }).populate(
      "creator",
      "firstname lastname id profilePicture"
    );
    res.json({ status: "success", data: post });
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};

exports.putPost = async (req, res) => {
  const params = req.params;

  try {
    if (!params.id) {
      res.status(400).json({ status: "error", message: "Invalid id" });
      return;
    }

    const PUTPOST = await POST.findById(params.id);

    if (!PUTPOST) {
      res.status(404).json({ status: "error", message: "Post not found" });
      return;
    }

    PUTPOST.appliedUsers.push(params.userID);
    PUTPOST.numplace = PUTPOST.numplace - 1;

    await PUTPOST.save();

    res.json({ status: "success", data: PUTPOST });
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};

exports.cancelPost = async (req, res) => {
  const params = req.params;

  try {
    if (!params.id) {
      res.status(400).json({ status: "error", message: "Invalid id" });
      return;
    }

    const PUTPOST = await POST.findById(params.id);
    if (!PUTPOST) {
      res.status(404).json({ status: "error", message: "Post not found" });
      return;
    }

    const newData = PUTPOST.appliedUsers.filter((item) => {
      return !item.equals(new ObjectId(params.userID));
    });

    PUTPOST.appliedUsers = newData;
    PUTPOST.numplace = PUTPOST.numplace + 1;
    await PUTPOST.save();

    res.json({ status: "success", data: PUTPOST });
  } catch (err) {
    res.status(500).json({ status: "error", message: "error" });
  }
};
