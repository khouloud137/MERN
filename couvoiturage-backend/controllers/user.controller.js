const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET, // Click 'View Credentials' below to copy your API secret
});

//     const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: 'uploads', // Dossier dans lequel stocker les fichiers sur Cloudinary
//     allowed_formats: ['jpg', 'png', 'jpeg'], // Formats de fichier autorisés
//     // Transformation optionnelle à appliquer aux fichiers téléchargés (redimensionnement, recadrage, etc.)
//     transformation: [{ width: 500, height: 500, crop: 'limit' }]
//   }
// });

exports.signup = async (req, res) => {
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    bio: req.body.bio,
    birthdate: req.body.birthdate,
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
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.json({ message: "email Invalid..." });
  }
  bcrypt.compare(password, user.password).then((isMatch) => {
    if (isMatch == false) {
      return res.json({ message: " password Invalide..." });
    } else {
      const token = jwt.sign(
        { data: { id: user._id, role: user.role } },
        process.env.CLE
      );
      const { id, firstname, lastname, email, bio, birthdate, profilePicture } =
        user;
      return res.status(200).json({
        message: "success...",
        token: token,
        user: {
          id,
          firstname,
          lastname,
          email,
          bio,
          birthdate,
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
    updatedData = { ...updatedData, firstname: firstname };
  }
  if (lastname !== "") {
    updatedData = { ...updatedData, lastname: lastname };
  }
  if (bio !== "") {
    updatedData = { ...updatedData, bio: bio };
  }
  if (email !== "") {
    updatedData = { ...updatedData, email: email };
  }
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
        } else {
          console.log("File deleted successfully");
        }
      });
    }
  }
};
