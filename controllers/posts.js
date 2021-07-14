const Post = require("../models/Post");

// @desc    Get All Posts
// @type    GET
// @access  PUBLIC
exports.getPosts =
  ("/",
  async (req, res) => {
    try {
      const post = await Post.findAll();
      res.status(200).json({
        success: true,
        data: post,
      });
    } catch (error) {
      res.send(error);
    }
  });

// @desc    Creates new post
// @type    POST
// @access  PUBLIC
exports.createPosts =
  ("/",
  async (req, res) => {
    try {
      const post = await Post.create(req.body);

      res.status(201).json({
        success: true,
        data: post,
      });
    } catch (error) {
      res.send(error);
    }

    console.log(post);
  });

// @desc    Get Post by ID
// @type    GET
// @access  PUBLIC
exports.getPostsId =
  ("/:id",
  (req, res) => {
    res.send("Gets post by id");
  });

// @desc    Edits Post by ID
// @type    PUT
// @access  PUBLIC
exports.updatePosts =
  ("/:id",
  (req, res) => {
    res.send("Edits Post by ID");
  });

// @desc    Deletes Post by ID
// @type    DELETE
// @access  PUBLIC
exports.deletePosts =
  ("/:id",
  (req, res) => {
    res.send("Deletes Post by ID");
  });
