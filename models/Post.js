const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../config/db')

const Post = sequelize.define("posts", {
  posts: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;

// ===The naming convention is a bit off===