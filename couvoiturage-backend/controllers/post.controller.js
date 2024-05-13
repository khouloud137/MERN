const POST = require("../models/posts.model");

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
    console.log(updatepost);
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
