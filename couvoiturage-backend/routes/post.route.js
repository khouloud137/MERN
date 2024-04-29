const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const  verifyToken  = require("../middlewares/verifyToken");

router.get("/GetAllposts", verifyToken, postController.GetAllposts);
router.post("/AddPost", verifyToken, postController.AddPost);
router.delete("/DeletePost/:id", verifyToken, postController.DeletePost);
router.put("/UpdatePost/:id", verifyToken, postController.UpdatePost);
module.exports = router;