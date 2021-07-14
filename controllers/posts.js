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
  async (req, res) => {
    try {
      const posts = await Post.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        data: posts,
      });
    } catch (error) {
      res.send(error);
    }
  });

// @desc    Edits Post by ID - Error on return data
// @type    PUT
// @access  PUBLIC
exports.updatePosts =
  ("/:id",
  async (req, res) => {
    try {
      const posts = await Post.update(
        {
          posts: req.body.posts,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      // Return results -- Could be inefficient
      const results = await Post.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        data: results,
      });
    } catch (error) {
      res.send(error);
    }

    res.send("Edits Post by ID");
  });

// @desc    Deletes Post by ID
// @type    DELETE
// @access  PUBLIC
exports.deletePosts =
  ("/:id",
  async (req, res) => {
    try {
      const posts = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.json({
        success: true,
        data: {},
      });
    } catch (error) {}

    res.send("Deletes Post by ID");
  });
