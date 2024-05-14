const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.put(
  "/Setting",
  upload.single("profilePicture"),verifyToken,
  userController.Setting
);

module.exports = router;
