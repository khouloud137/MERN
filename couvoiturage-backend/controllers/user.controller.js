const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
