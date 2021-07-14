const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("dummydatabase", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

const Post = sequelize.define("posts", {
  posts: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;

// ===The naming convention is a bit off===