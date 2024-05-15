const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET,
});

exports.signup = async (req, res) => {
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email.toLowerCase(),
    password: bcrypt.hashSync(req.body.password, 10),
    bio: req.body.bio,
  };

  const validemail = await User.findOne({ email: data.email });
  if (!validemail) {
    const _user = new User(data);
    await _user
      .save()
      .then(() => {
        res.status(200).json({ message: "user added successfully..." });
      })
      .catch((error) => {
        res.status(400).json({ message: "error added..." });

        console.log(error);
      });
  } else {
    res.status(400).json({ message: "invalid email..." });
  }
};

exports.signin = async (req, res) => {
  // email.toLowerCase();

  const email = req.body.email.toLowerCase();
  const password = req.body.password;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ message: "email Invalid..." });
  }
  bcrypt.compare(password, user.password).then((isMatch) => {
    if (isMatch == false) {
      return res.status(400).json({ message: " password Invalide..." });
    } else {
      const token = jwt.sign(
        { data: { id: user._id, role: user.role } },
        process.env.CLE
      );
      const { id, firstname, lastname, email, bio, profilePicture } = user;
      return res.status(200).json({
        message: "success...",
        token: token,
        user: {
          _id: id,
          firstname,
          lastname,
          email,
          bio,
          profilePicture,
        },
      });
    }
  });
};
exports.Setting = async (req, res) => {
  const { firstname, lastname, bio, email } = req.body;
  const updatedData = {};
  if (firstname !== "") {
    updatedData.firstname = firstname;
  }
  if (lastname !== "") {
    updatedData.lastname = lastname;
  }
  if (bio !== "") {
    updatedData.bio = bio;
  }
  if (email !== "") {
    updatedData.email = email;
  }

  try {
    if (req.file) {
      const uploadResult = await cloudinary.uploader
        .upload(req.file.path)
        .catch((error) => {
          console.log(error);
        });

      if (uploadResult) {
        updatedData.profilePicture = uploadResult.url;

        // Remove the file from file system after successful upload
        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          }
        });
      }
    }
    if (Object.keys(updatedData).length > 0) {
      const userID = req.user.data.id;
      const updatedUser = await User.findByIdAndUpdate(userID, updatedData, {
        new: true,
        select: "-password",
      });
      if (updatedUser) {
        res.status(200).json({
          status: "success",
          message: "User has been updated",
          data: updatedUser,
        });
      }
    } else {
      res.status(400).json({ status: "fail", message: "failed user update" });
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: "error" });
  }
};
