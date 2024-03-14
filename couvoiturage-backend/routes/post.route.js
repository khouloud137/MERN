const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

router.get("/GetAllposts", postController.GetAllposts);
router.post("/AddPost",postController.AddPost);
router.delete("/DeletePost/:id",postController.DeletePost);
router.put("/UpdatePost/:id", postController.UpdatePost);
module.exports = router;