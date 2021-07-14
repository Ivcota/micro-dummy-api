const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPosts,
  getPostsId,
  updatePosts,
  deletePosts,
} = require("../controllers/posts");

// Posts Routes
router.route("/").get(getPosts).post(createPosts);
router.route("/:id").get(getPostsId).put(updatePosts).delete(deletePosts);

module.exports = router;
