const POST = require("../models/posts.model");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

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
  try {
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
  const params = req.params;
  const updatepost = req.body;
  try {
    const post = await POST.findByIdAndUpdate(
      params.id,
      { updatepost },
      { new: true }
    );

    if (post) {
      res.json({ status: "success", message: "post updated" });
    } else {
      res.json({ status: "fail", message: "post was not updated" });
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
