// @desc    Get All Posts
// @type    GET
// @access  PUBLIC
exports.getPosts = ("/", (req, res) => {
  res.send("Get's All Posts");
});

// @desc    Creates new post
// @type    POST
// @access  PUBLIC
exports.createPosts = ("/", (req, res) => {
  res.send("Creates new post");
});

// @desc    Get Post by ID
// @type    GET
// @access  PUBLIC
exports.getPostsId = ("/:id", (req, res) => {
  res.send("Gets post by id");
});

// @desc    Edits Post by ID
// @type    PUT
// @access  PUBLIC
exports.updatePosts = ("/:id", (req, res) => {
  res.send("Edits Post by ID");
});

// @desc    Deletes Post by ID
// @type    DELETE
// @access  PUBLIC
exports.deletePosts = ("/:id", (req, res) => {
  res.send("Deletes Post by ID");
});